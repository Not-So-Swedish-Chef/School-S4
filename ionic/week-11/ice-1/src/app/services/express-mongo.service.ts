import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpressMongoService {

  constructor(private http : HttpClient) { }

  insert(params : any) {
    return this.http.post('http://127.0.0.1:8887/insert/', {params});
  }

  retrieve(params : any) {
    return this.http.get('http://127.0.0.1:8887/retrieve/', {params});
  }
}
