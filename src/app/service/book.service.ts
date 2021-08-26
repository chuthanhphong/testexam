import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  API = `${environment.API}`;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.API + `books`);
  }

  getById(id: number): Observable<Book> {
    return this.http.get<Book>(this.API + `books/` + id);
  }

  createBook(book: Book): Observable<Book> {
    // @ts-ignore
    return this.http.post<Book>(this.API + 'books', book);
  }

  edit(id: number, book: Book): Observable<Book> {
    // @ts-ignore
    return this.http.put<Book>(this.API + 'books/' + id, book);
  }

  delete(id: number): Observable<Book> {
    return this.http.delete<Book>(this.API + 'books/' + id);
  }
}
