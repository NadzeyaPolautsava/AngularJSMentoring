import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'duration'
})
export class DurationPipe implements PipeTransform {
	transform(duration: number) {
		if (!duration) {
			return "0 min";
		}
        let hours = Math.floor(duration / 60);
        let minutes = duration;
        let result = "";
        if (hours > 0) {
            result = hours + "h";
            minutes  -= hours * 60;
        }
        if (result) {
            result += " ";
        }
        result += minutes + "min"
		return result;
	}
}