// import { EditCoursePageComponent } from './editCoursePage';
// import { CourseService } from './../../core/services/course.service';
// import { TestBed, ComponentFixture } from "@angular/core/testing";
// import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
// import { FormBuilder } from "@angular/forms";
// import { Router, ActivatedRoute } from '@angular/router'
// import { RouterTestingModule } from '@angular/router/testing';



// describe('BannerComponent (inline template)', () => {

//     let comp:    EditCoursePageComponent;
//     let fixture: ComponentFixture<EditCoursePageComponent>;
//     let de:      DebugElement;
//     let el:      HTMLElement;
//     let courseService: CourseService;
// beforeEach(() => {

//     let courseServiceStub =
//         { id: 3, duration: 15, title: 'Some Video3', date: new Date("February 4, 2016 10:13:00"), description: 'description2', topRated: true };


//     TestBed.configureTestingModule({
//         imports: [
//             RouterTestingModule
//         ],
//         providers: [
//             FormBuilder,  
//             {
//                 provide: CourseService, 
//                 useValue:  courseServiceStub
//             },
//             // ActivatedRoute, 
//             // Router
//             {
//                 provide: Router,
//                 useValue: { navigate: jasmine.createSpy('navigate') }
//             },
//             {
//                 provide: ActivatedRoute,
//                 useValue: { navigate: jasmine.createSpy('navigate') }
//             }

//         ], 
//         schemas: [ NO_ERRORS_SCHEMA ]
//     }).compileComponents();

//     fixture = TestBed.createComponent(EditCoursePageComponent);
//     comp = fixture.componentInstance;

//     let courseService = TestBed.get(CourseService);
// });

// it('should welcome "Bubba"', () => {
//     fixture.detectChanges();
//     // spyOn(comp.router, 'navigate');    // This prevents every test from calling the real router.navigate which means I don't need to add routes to RouterTestingModule
//     expect(el.textContent).toContain('Some Video3');
//   });
// });