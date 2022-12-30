import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { BookService } from './book.service';
import { Books } from './books';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  API_URL:string="";
  constructor() { }

getBooks() {
  return this.API_URL
}

}
