import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServieService {
  name: any;
  constructor() { }
  sharedData: any='';
  shareedData: any ="";

  setData(data: any) {
    this.sharedData = data;
  }

  getData() {
    return this.sharedData;
  }

  seetData(data: any) {
    this.shareedData = data;
  }
  
  geetData() {
    return this.shareedData
  }

}
