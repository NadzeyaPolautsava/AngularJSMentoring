import { FormControl } from '@angular/forms';


export class CustomValidators {

    static validateDate(c: FormControl): {[key: string]: boolean} {
        let DATE_REGEXP = new RegExp('(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/[0-9]{4}');
        console.log('VALIDATION!!');
        return DATE_REGEXP.test(c.value) ? null : { invalidDateFormat: true };
    }
}