import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpressMongoService {

  constructor(private http : HttpClient) { }

  initialize(params : any) { return this.http.post('http://127.0.0.1:8887/create', { params }); } //creates new db with 5 sample questions

  load(params : any) { return this.http.post('http://127.0.0.1:8887/load', { params : {} }); } //loads db from file

  save(params : any) { return this.http.get('http://127.0.0.1:8887/save', { params : {} }); } //saves db to file

  retrieve(params : any) { return this.http.get('http://127.0.0.1:8887/retrieve', { params }); } //retrieves many documents from db

  insert(params : any) { return this.http.post('http://127.0.0.1:8887/insert', { params }); } //inserts one document into db

  update(params : any) { return this.http.put('http://127.0.0.1:8887/update', { params }); } //modifies one document in db

  remove(params : any) { return this.http.delete('http://127.0.0.1:8887/remove', { params }); } //removes one document from db

  clear(params : any) { return this.http.post('http://127.0.0.1:8887/clear', { params }); } //clears db - and all documents - from server
}
