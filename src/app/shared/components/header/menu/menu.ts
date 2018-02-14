
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router'
import { CourseService } from './../../../../core/services/course.service';
import * as lodash from 'lodash';

@Component({
  selector: 'app-menu',
  providers: [],
  templateUrl: './menu.html',
  styleUrls: []
})
export class MenuComponent implements OnInit, OnDestroy, AfterViewInit {

  public courseTitle: string = '';
  private alive = true;

  constructor(private route: ActivatedRoute, private courseService: CourseService, private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe((data) => {
        console.log('aaaaaa');
        if (data['id']) {
          let courseId = data['id'];
          this.courseService.getItemById(courseId)
            .takeWhile(() => this.alive)
            .subscribe(
            x => {
              this.courseTitle = lodash.head(x).title;
            }
            );
        } else {
          this.courseTitle = '';
        }
      })
  }

  ngAfterViewInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        this.courseTitle = '';
        let currentRoute = this.router.routerState.snapshot.root.firstChild;
        console.log('aaa IDX: ' + this.router.routerState.snapshot.url.indexOf('courses/'));
        if (this.router.routerState.snapshot.url.indexOf('courses/') >= 0) {
          let courseId = Number(this.router.routerState.snapshot.url.slice(this.router.routerState.snapshot.url.indexOf('courses/') + 8));
          console.log('aaa');
          if (courseId) {
            this.courseService.getItemById(courseId)
              .takeWhile(() => this.alive)
              .subscribe(
              x => {
                if (x) {
                  this.courseTitle = lodash.head(x).title;
                }
              }
              );
          }
        }
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }

}