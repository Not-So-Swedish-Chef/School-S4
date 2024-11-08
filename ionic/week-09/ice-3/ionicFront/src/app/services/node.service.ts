import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  constructor(private http: HttpClient) { }
  
  insert(params:any) {
    return this.http.post('http://127.0.0.1:8887/insert/', { params });
  }
  
  retrieve(params:any) {
    return this.http.get('http://127.0.0.1:8887/retrieve/', { params });
  }

  celsius(params:any) {
    return this.http.get('http://127.0.0.1:8888/celsius/', { params });
  }

  fahrenheit(params:any) {
    return this.http.get('http://127.0.0.1:8888/fahrenheit/', { params });
  }
}
