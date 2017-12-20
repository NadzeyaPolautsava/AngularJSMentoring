import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'sortByTitle', 
	pure: false
})
export class TitlePipe implements PipeTransform {
	transform(courses: any[], title: string) {
        console.log('title pipe');
        console.log(title);
        if (!courses || !title) {
			return courses
		}
        console.log(courses.filter((course) => course.title === title));
		return courses.filter((course) => course.title.startsWith(title));
	}
}