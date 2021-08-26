import {Component, OnInit} from '@angular/core';
import {BookService} from '../service/book.service';
import {Book} from '../model/book';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  id?: number;
  Book: Book[] = [];

  constructor(private bookService: BookService, private activeRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  // tslint:disable-next-line:typedef
  getAll() {
    return this.bookService.getAll().subscribe(data => {
      this.Book = data;
    });
  }

}
