import {  Directive, ElementRef, Input } from '@angular/core';

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
      console.log(this.courseCreatedDate);
      if (!this.courseCreatedDate) {
        return;
      }
      let today: Date = new Date();
      let twoWeeksBefore = new Date(today.getDate() - 14);
      if (this.courseCreatedDate < today && this.courseCreatedDate >= twoWeeksBefore) {
        this.el.nativeElement.style.backgroundColor = 'lightgreen	';  
      } else if (this.courseCreatedDate > today) {
        this.el.nativeElement.style.backgroundColor = 'lightskyblue';
      }
    }
}