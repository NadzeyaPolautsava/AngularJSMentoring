import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-search',
  providers: [],
  templateUrl: './search.html', 
  styleUrls: []
})
export class SearchComponent {

  constructor() {
  }

  findCourse(userQuery: string) {
    console.log(userQuery);
  }
}
