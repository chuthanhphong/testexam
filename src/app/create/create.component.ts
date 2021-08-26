import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../service/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  bookForm: FormGroup = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl()
  });

  constructor(private bookService: BookService, private router: Router) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  create() {
    const book = this.bookForm.value;
    console.log(book);
    this.bookService.createBook(book).subscribe(data => {
      console.log('ok');
      this.router.navigate(['list']);
    });
  }

}
