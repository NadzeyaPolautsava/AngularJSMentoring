import {  Directive, ElementRef, Input } from '@angular/core';
import { isString } from 'util';

@Directive({ 
  selector: '[highlight-border]'
})

export class HighlightBorderDirective {
    @Input() courseCreatedDate: Date;
    
    constructor(private el: ElementRef) {
    }
    ngOnInit() {
      console.log("input-box keys  : ", this.courseCreatedDate);
      this.highlightBorder();
   }

    private highlightBorder() {
      console.log('courseCreatedDate ' + this.courseCreatedDate);
      if (!this.courseCreatedDate) {
        return;
      }
      let today = new Date();
      let twoWeeksBefore = new Date();
      let courseCreatedDate = new Date(this.courseCreatedDate);
      twoWeeksBefore.setDate(today.getDate() - 14);
      console.log('today: ' + today);
      console.log('typeof ' + (isString(this.courseCreatedDate)))
      console.log('this.courseCreatedDate > today: ' + (this.courseCreatedDate ));
      if (courseCreatedDate < today && courseCreatedDate >= twoWeeksBefore) {
        this.el.nativeElement.style.backgroundColor = 'lightgreen	';  
      } else if (courseCreatedDate> today) {
        this.el.nativeElement.style.backgroundColor = 'lightskyblue';
      }
    }

    isString(x: any): x is string {
      return typeof x === "string";
  }
}