import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  info:string="";
  constructor() { }
  getInfo() {
    return this.info;
  }

  setInfo(message:string) {
    this.info=message;
  }
}
