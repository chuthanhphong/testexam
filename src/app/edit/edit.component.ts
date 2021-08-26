import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../service/book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  bookForm: FormGroup = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl()
  });

  // @ts-ignore
  id: number;

  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getBook(this.id);

    });
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getBook(id: number) {
    this.bookService.getById(id).subscribe(data => {
      this.bookForm = new FormGroup({
        id: new FormControl(data.id),
        title: new FormControl(data.title),
        author: new FormControl(data.author),
        description: new FormControl(data.description)
      });
    });
  }

  // tslint:disable-next-line:typedef
  editBook(id: number) {
    const book = this.bookForm.value;
    this.bookService.edit(id, book).subscribe(data => {
      console.log('ok');
      this.router.navigate(['list']);
    });
  }

}
