import { Component, forwardRef, Input } from '@angular/core'
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl, NG_VALIDATORS } from '@angular/forms';
import { Validator } from '@angular/forms/src/directives/validators';

const CUSTOM_DATE_INPUT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CreatedDateInputComponent),
  multi: true
};

const CUSTOM_DATE_INPUT_VALIDATORS = { 
  provide: NG_VALIDATORS, 
  useExisting: forwardRef(() => CreatedDateInputComponent), 
  multi: true 
}

@Component({
  selector: 'input-created-date',
  providers: [CUSTOM_DATE_INPUT_VALUE_ACCESSOR, CUSTOM_DATE_INPUT_VALIDATORS],
  templateUrl: './createdDateInput.html', 
  styleUrls: []
})
export class CreatedDateInputComponent implements ControlValueAccessor, Validator {

  @Input('createdDate')
  public _createdDate: Date;

  constructor() {
  }

  propagateChange = (_: any) => {};


  get createdDate() {
    return this._createdDate;
  }

  set createdDate(val) {
    this._createdDate = val;
    this.propagateChange(this._createdDate);
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  writeValue(value: any) {
    console.log('date writeValue');
    if (value !== this._createdDate) {
      this._createdDate = value;
      console.log('date wrote ' + this._createdDate);
    }
  }

  validate(c: FormControl) {
    let DATE_REGEXP = new RegExp('(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/[0-9]{4}$');
    console.log('VALIDATION!!');
    return DATE_REGEXP.test(c.value) ? null : { invalidDateFormat: true };
  }
}
