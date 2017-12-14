import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-search',
  providers: [],
  templateUrl: './search.html', 
  styleUrls: []
})
export class SearchComponent {

  @Output('filterByTitle') filterByTitle = new EventEmitter();
  

  findCourse(userQuery: string) {
    console.log(userQuery);
    this.filterByTitle.emit({
      value: userQuery
    });
  }

  filterCourses($event) {
    this.filterByTitle.emit({
      value: $event.value
    });
  }
}
