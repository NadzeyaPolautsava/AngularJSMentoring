import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'action-bar',
  providers: [],
  templateUrl: './actionBar.html', 
  styleUrls: ['./actionBar.css']
})
export class ActionBarComponent {

  @Output('filterByTitleInActionBar') filterByTitleInActionBar = new EventEmitter();
  constructor() {
  }

  filterCourses($event) {
    console.log('In actionBar filterCourses');

    this.filterByTitleInActionBar.emit({
      value: $event.value
    });
  }
}
