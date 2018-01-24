import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl, NG_VALIDATORS } from '@angular/forms';

const CUSTOM_AUTHORS_SELECT_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectAuthorsComponent),
  multi: true
};

@Component({
  selector: 'select-authors',
  providers: [],
  templateUrl: './selectAuthors.html', 
  styleUrls: []
})
export class SelectAuthorsComponent implements ControlValueAccessor {
  @Input('authors')
  _authors = [];

  items = ['1', '2', '3'];
  propagateChange = (_: any) => {};

  
  writeValue(value) {
    if (value) {
      this._authors = value;
    }
  }  

  get autors() {
    return this._authors;
  }

  set authors(val) {
    this._authors = val;
    this.propagateChange(this._authors);
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}
}
