import { Injectable } from '@angular/core';
import { Pdata } from './pData';
import { PDATA } from 'src/assets/data/pdata';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor() { }

  loadData(): Pdata { return PDATA; }
}
