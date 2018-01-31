import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl, NG_VALIDATORS } from '@angular/forms';
import { Validator } from '@angular/forms/src/directives/validators';

const CUSTOM_DURATION_INPUT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DurationInputComponent),
  multi: true
};

const CUSTOM_DURATION_INPUT_VALIDATORS = { 
  provide: NG_VALIDATORS, 
  useExisting: forwardRef(() => DurationInputComponent), 
  multi: true 
}

@Component({
  selector: 'input-duration',
  providers: [
    CUSTOM_DURATION_INPUT_VALUE_ACCESSOR   
  ],
  templateUrl: './durationInput.html',
  styleUrls: [], 
})
export class DurationInputComponent implements ControlValueAccessor, Validator {

  @Input('duration')
  _duration = 0;

  propagateChange = (_: any) => {};

  
  writeValue(value) {
    if (value) {
      this.duration = value;
    }
  }  

  get duration() {
    return this._duration;
  }

  set duration(val) {
    this._duration = val;
    this.propagateChange(this._duration);
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}
 
  validate(c: FormControl) {
    return { durationError: {
          valid: false
      },
    };
  }
}
