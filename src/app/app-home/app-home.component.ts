import { fingerprint } from '@angular/compiler/src/i18n/digest';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Books } from '../books';
import { BookService } from '../book.service';


@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {

 

  title = 'Capg_project';

  public books: Books[] | undefined;

  constructor(private bookService: BookService) { }
ngOnInit(): void {
      this.getBooks();
  }
  
  public getBooks(): void{
    this.bookService.getBooks().subscribe( 
      (response: Books[]) => {
        this.books = response;
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    )
  }
}