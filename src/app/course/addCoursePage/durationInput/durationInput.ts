import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl, NG_VALIDATORS } from '@angular/forms';
import { Validator } from '@angular/forms/src/directives/validators';

const CUSTOM_DURATION_INPUT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DurationInputComponent),
  multi: true
};

@Component({
  selector: 'input-duration',
  providers: [
    CUSTOM_DURATION_INPUT_VALUE_ACCESSOR, 
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DurationInputComponent),
      multi: true,
    }    
  ],
  templateUrl: './durationInput.html',
  styleUrls: [], 
})
export class DurationInputComponent implements ControlValueAccessor, Validator {

  public duration: number;

  constructor() {
  }

  onChange = (_) => {};
  onTouched = () => {};

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  writeValue(value: any) {
    if (value !== this.duration) {
      this.duration = value;
    }
  }

  validate(c: FormControl) {
    return { jsonParseError: {
          valid: false,
      },
    };
  }
}
