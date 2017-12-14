import {Component} from '@angular/core'

@Component({
  selector: 'courses-page',
  providers: [],
  templateUrl: './coursesPage.html', 
  styleUrls: []
})
export class CoursesPageComponent {
  constructor() {
  }

  public query: string = '';

  findCourse(query: string) {
    this.query = query;
  }
}
