import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Books } from '../books';
import { NgForm } from '@angular/forms'; 
import { BookService } from '../book.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  title = 'Capg_project'; 
 
  public books: Books[] | any; 
  public editBook: Books | any; 
  public deleteBook: Books | any; 
 
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
 
  public onOpenModal(books: Books, mode: String): void{ 
    const container = document.getElementById('main-container'); 
    const button = document.createElement('button'); 
    button.type = 'button'; 
    button.style.display = 'none'; 
    button.setAttribute('data-toggle', 'modal'); 
    if(mode === 'add'){ 
      button.setAttribute('data-target', '#addBookModal'); 
    } 
    if(mode === 'edit'){ 
      this.editBook = books; 
      button.setAttribute('data-target', '#updateBookModal'); 
    } 
    if(mode === 'delete'){ 
      this.deleteBook = books; 
      button.setAttribute('data-target', '#deleteBookModal'); 
    } 
    container?.appendChild(button); 
    button.click(); 
  } 
 
  public onAddBook(addForm: NgForm): void{ 
    document.getElementById('add-employee-form')?.click(); 
    this.bookService.addBooks(addForm.value).subscribe( 
      (response: Books) =>{ 
        console.log(response); 
        this.getBooks(); 
        addForm.reset(); 
      }, 
      (error: HttpErrorResponse) =>{ 
        alert(error.message); 
      } 
    ) 
  } 
 
  public onUpdateBook(book: Books): void{ 
    this.bookService.updateBooks(book).subscribe( 
      (response: Books) =>{ 
        console.log(response); 
        this.getBooks(); 
      }, 
      (error: HttpErrorResponse) =>{ 
        alert(error.message); 
      } 
    ) 
  } 
 
  public onDeleteBook(bookId: number): void{ 
    this.bookService.deleteBooks(bookId).subscribe( 
      (response: void) =>{ 
        console.log(response); 
        this.getBooks(); 
      }, 
      (error: HttpErrorResponse) =>{ 
        alert(error.message); 
      } 
    ) 
  } 
 
  public searchBooks(key: string): void{ 
    console.log(key); 
    const results: Books[] = []; 
    for(const book of this.books){ 
      if(book.name.toLowerCase().indexOf(key.toLowerCase()) !== -1|| 
      book.author.toLowerCase().indexOf(key.toLowerCase()) !== -1|| 
      book.genre.toLowerCase().indexOf(key.toLowerCase()) !== -1|| 
      book.desc.toLowerCase().indexOf(key.toLowerCase()) !== -1){ 
        results.push(book); 
      } 
    } 
    this.books = results; 
    if(results.length===0 || !key){ 
      this.getBooks(); 
    } 
  } 
}