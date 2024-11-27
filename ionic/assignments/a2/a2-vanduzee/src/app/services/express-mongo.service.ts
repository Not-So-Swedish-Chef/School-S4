import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpressMongoService {

  constructor(private http : HttpClient) { }

  initialize(params : any) { return this.http.post('http://127.0.0.1:8887/create/', { params }); }

  retrieve(params : any) { return this.http.get('http://127.0.0.1:8887/retrieve/', { params }); }

  insert(params : any) { return this.http.post('http://127.0.0.1:8887/insert/', { params }); }

  update(params : any) { return this.http.put('http://127.0.0.1:8887/update/', { params }); }

  remove(params : any) { return this.http.delete('http://127.0.0.1:8887/remove/', { params }); }
}
