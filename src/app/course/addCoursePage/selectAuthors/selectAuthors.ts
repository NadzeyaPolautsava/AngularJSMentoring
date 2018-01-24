import { Component, Input, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl, NG_VALIDATORS, FormBuilder, FormArray } from '@angular/forms';
import { IAuthor } from './../../../interfaces/author';
import { Observable } from 'rxjs/Observable';
import { AuthorService } from './../../../core/services/author.service';
import { FormGroup } from '@angular/forms/src/model';

const CUSTOM_AUTHORS_SELECT_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectAuthorsComponent),
  multi: true
};

@Component({
  selector: 'select-authors',
  providers: [CUSTOM_AUTHORS_SELECT_ACCESSOR],
  templateUrl: './selectAuthors.html', 
  styleUrls: []
})
export class SelectAuthorsComponent implements ControlValueAccessor, OnInit {
  @Input('authors')
  _authors: Array<IAuthor> = [];

  items: Observable<IAuthor[]>;
  propagateChange = (_: any) => {};

  constructor(private authorService: AuthorService) {

  }

  ngOnInit() {
    this.items = this.authorService.getList();
  }

  writeValue(value) {
    if (value) {
      this._authors = value;
    }
  }  

  get autors(): IAuthor[] {
    return this._authors;
  }

  set authors(val) {
    // this._authors = val;
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  setAuthors($event, author) {
    if ($event.target.checked) {
      this._authors.push(author);
    } else {
      console.log('unchecked: ' + $event.target.value);
      for (let i = 0; i < this._authors.length; i++) {
        let a = this._authors[i];
        if (a.id === author.id) {
          this._authors.splice(i, 1);
        }
      }
    }
    this.propagateChange(this._authors);
  }

  registerOnTouched() {}
}
