import { Injectable } from '@angular/core';
import { Pdata } from './pData';
import { PDATA } from '../assets/data/pData';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor() { }

  loadData(): Pdata { return PDATA; }

  data : any;

  getData(key : string) {
    this.data = localStorage.getItem(key);
    return this.data;
  }

  setData(key : string, value : any) {
    localStorage.setItem(key, value);
  }

  removeData(key : string) {
    localStorage.removeItem(key);
  }
}
