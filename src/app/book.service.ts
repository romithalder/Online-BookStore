
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Books } from './books';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiServerUrl = environment.apiBaseUrl;
  
  constructor(private http: HttpClient) { }

  public getBooks(): Observable<Books[]> {
    return this.http.get<Books[]>(`${this.apiServerUrl}/book/all`)
  }

  public addBooks(book: Books): Observable<Books> {
    return this.http.post<Books>(`${this.apiServerUrl}/book/add`, book)
  }

  public updateBooks(book: Books): Observable<Books> {
    return this.http.put<Books>(`${this.apiServerUrl}/book/update`, book)
  }

  public deleteBooks(bookId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/book/delete/${bookId}`)
  }
}