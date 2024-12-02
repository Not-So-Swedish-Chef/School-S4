import { Component, OnInit } from '@angular/core';
import { ExpressMongoService } from 'src/app/services/express-mongo.service';
import { batchItems } from 'src/assets/data/constants';

@Component({
  selector : 'app-main',
  templateUrl : './main.page.html',
  styleUrls : ['./main.page.scss'],
})
export class MainPage implements OnInit {
  dbName : string = ''; // Database name
  collectionName : string = ''; // Collection name
  isInit : boolean = false; // Tracks if the database is initialized
  itemCount : number = 0; // Number of items in the collection

  constructor(private mongoService : ExpressMongoService) {}

  ngOnInit() {}

  // Initialize the database and preload questions
  initDb() {
    // Prompt the user for database and collection names
    const dbNameInput = window.prompt('Enter Database Name:', this.dbName);
    const collectionNameInput = window.prompt('Enter Collection Name:', this.collectionName);

    // Validate user input
    if (!dbNameInput || !collectionNameInput) {
      alert('Both Database and Collection names are required.');
      return;
    }

    // Update component properties with user input
    this.dbName = dbNameInput.trim();
    this.collectionName = collectionNameInput.trim();

    const params : { dbName : string, collectionName : string } = { dbName : this.dbName, collectionName : this.collectionName };

    // Initialize the database
    this.mongoService.initialize(params).subscribe(
      (response) => {
        console.log(response);
        this.preloadQuestions(); // Preload the questions after successful initialization
        this.isInit = true;
        alert(`Database (${this.dbName}) and Collection (${this.collectionName}) initialized successfully.`);
      },
      (error) => {
        console.error(error);
        alert('Error initializing database.');
      }
    );
  }

  // Preload questions into the database
  private preloadQuestions() {
    for (const item of batchItems) {
      this.mongoService.insert(item).subscribe(
        (response) => {
          console.log(`Inserted document : ${item.question}`);
        },
        (error) => {
          console.error(`Error inserting document : ${item.question}`, error);
        }
      );
    }
    alert('Batch items inserted successfully!');
  }

  loadDb() {
    // Prompt user to select a file
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json'; // Restrict to JSON files
    input.onchange = (event : any) => {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();

        // Read the file
        reader.onload = () => {
          try {
            // Parse the JSON
            const data = JSON.parse(reader.result as string);

            // Validate the file schema
            if (!this.isValidSchema(data)) {
              alert('Invalid file format. File must match the required schema.');
              this.isInit = false;
              return;
            }

            // Prompt for database and collection names
            const dbNameInput = window.prompt('Enter Database Name:', '');
            const collectionNameInput = window.prompt('Enter Collection Name:', '');

            if (!dbNameInput || !collectionNameInput) {
              alert('Both Database and Collection names are required.');
              this.isInit = false;
              return;
            }

            // Update properties
            this.dbName = dbNameInput.trim();
            this.collectionName = collectionNameInput.trim();

            const params : { dbName : string, collectionName : string, data : any } = {
              dbName : this.dbName,
              collectionName : this.collectionName,
              data : data,
            };

            // Send the data to the server
            this.mongoService.load(params).subscribe(
              (response : LoadResponse) => {
                console.log(response);
                this.itemCount = response.itemCount || 0; // Type-safe access to `itemCount`
                this.isInit = true;
                alert(
                  `Database (${this.dbName}) and Collection (${this.collectionName}) loaded successfully. Items: ${this.itemCount}`
                );
              },
              (error) => {
                console.error(error);
                alert('Error loading database.');
              }
            );
          } catch (e) {
            console.error(e);
            alert('Invalid JSON file.');
            this.isInit = false;
          }
        };

        reader.readAsText(file);
      }
    };

    input.click(); // Trigger the file input dialog
  }

  private isValidSchema(data : any) : boolean {
    // Check if the data is an array
    if (!Array.isArray(data)) {
      return false;
    }

    // Check if each item in the array has the required structure
    for (const item of data) {
      if (typeof item.question !== 'string' || typeof item.answer !== 'string') {
        return false;
      }
    }

    return true; // Schema is valid
  }

  saveDb() {
    if (!this.isInit) {
      alert('No database is currently initialized.');
      return;
    }

    const fileName = window.prompt('Enter a file name to save the database:', `${this.dbName}_${this.collectionName}.json`);
    if (!fileName) {
      alert('File name is required to save the database.');
      return;
    }

    const params : { dbName : string, collectionName : string, fileName : string } = {
      dbName: this.dbName,
      collectionName: this.collectionName,
      fileName: fileName.endsWith('.json') ? fileName : `${fileName}.json`,
    };

    // Send request to backend to save the database to a file
    this.mongoService.save(params).subscribe(
      (response) => {
        console.log(response);
        alert(`Database (${this.dbName}) saved as ${params.fileName}.`);
      },
      (error) => {
        console.error(error);
        alert('Error saving database to file.');
      }
    );
  }

  dropDb() {
    if (!this.isInit) {
      alert('No database is currently initialized.');
      return;
    }

    const confirmDrop = window.confirm('Are you sure you want to clear the current database and collection? This action cannot be undone.');
    if (!confirmDrop) {
      return;
    }

    this.mongoService.clear({}).subscribe(
      (response) => {
        console.log(response);

        this.dbName = '';
        this.collectionName = '';
        this.itemCount = 0;
        this.isInit = false;

        alert('Database and Collection cleared successfully.');
      },
      (error) => {
        console.error(error);
        alert('Error clearing database.');
      }
    );
  }
}

interface LoadResponse {
  itemCount? : number;
}
