import { CourseService } from "./course.service";
import { HttpClientModule } from '@angular/common/http';
import { ResponseOptions } from '@angular/http';

import {
    TestBed,
    getTestBed,
    async,
    inject
} from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import {
    Headers, BaseRequestOptions,
    Response, HttpModule, Http, XHRBackend, RequestMethod
} from '@angular/http';


describe('CourseService', () => {
    let mockBackend: MockBackend;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                CourseService,
                MockBackend,
                BaseRequestOptions,
                {
                    provide: Http,
                    deps: [MockBackend, BaseRequestOptions],
                    useFactory:
                        (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                            return new Http(backend, defaultOptions);
                        }
                }
            ],
            imports: [
                HttpModule
            ]
        });
        mockBackend = getTestBed().get(MockBackend);
    });

    it('should get courses', done => {
        let courseService: CourseService;

        getTestBed().compileComponents().then(() => {
            mockBackend.connections.subscribe(
                (connection: MockConnection) => {
                    connection.mockRespond(new Response(
                        new ResponseOptions({
                            body: [
                                { id: 1, duration: 100, title: 'Some Video', date: new Date("February 4, 2022 10:13:00"), description: 'description', topRated: true },
                                { id: 2, duration: 200, title: 'Some Video2', date: new Date("February 4, 2016 10:13:00"), description: 'description2', topRated: true },
                                { id: 3, duration: 15, title: 'Some Video3', date: new Date("February 4, 2016 10:13:00"), description: 'description2', topRated: true },
                            ]
                        }
                        )));
                });

            courseService = getTestBed().get(CourseService);
            expect(courseService).toBeDefined();

            courseService.getList(1).subscribe((courses) => {
                expect(courses.length).toBeDefined();
                expect(courses.length).toEqual(3);
                done();
            });
        });
    });

    it('should find course', done => {
        let courseService: CourseService;

        getTestBed().compileComponents().then(() => {
            mockBackend.connections.subscribe(
                (connection: MockConnection) => {
                    connection.mockRespond(new Response(
                        new ResponseOptions({
                            body: [
                                { id: 1, duration: 100, title: 'Some Video', date: new Date("February 4, 2022 10:13:00"), description: 'description', topRated: true }
                            ]
                        }
                        )));
                });

            courseService = getTestBed().get(CourseService);
            expect(courseService).toBeDefined();

            courseService.find(1, 'Some').subscribe((courses) => {
                expect(courses.length).toBeDefined();
                expect(courses.length).toEqual(1);
                done();
            });
        });
    });

    it('should get item by id', done => {
        let courseService: CourseService;

        getTestBed().compileComponents().then(() => {
            mockBackend.connections.subscribe(
                (connection: MockConnection) => {
                    connection.mockRespond(new Response(
                        new ResponseOptions({
                            body: [
                                { id: 1, duration: 100, title: 'Some Video', date: new Date("February 4, 2022 10:13:00"), description: 'description', topRated: true }
                            ]
                        }
                        )));
                });

            courseService = getTestBed().get(CourseService);
            expect(courseService).toBeDefined();

            courseService.getItemById(1).subscribe((courses) => {
                expect(courses.length).toBeDefined();
                expect(courses.length).toEqual(1);
                done();
            });
        });
    });

    it('should get total count', done => {
        let courseService: CourseService;
        let respHeaders = new Headers();
        respHeaders.append('X-Total-Count', '20');
        getTestBed().compileComponents().then(() => {
            mockBackend.connections.subscribe(
                (connection: MockConnection) => {
                    connection.mockRespond(new Response(
                        new ResponseOptions({
                            body: [
                            ], 
                            headers: respHeaders
                        })
                    ));
                });

            courseService = getTestBed().get(CourseService);
            expect(courseService).toBeDefined();

            courseService.getTotalCount().subscribe((count) => {
                expect(count).toBeDefined();
                done();
            });
        });
    });

    it('should create course', done => {
        let courseService: CourseService;

        getTestBed().compileComponents().then(() => {
            mockBackend.connections.subscribe(
                (connection: MockConnection) => {
                    connection.mockRespond(new Response(
                        new ResponseOptions({
                            body: [
                                { id: 1, duration: 100, title: 'Some Video', date: new Date("February 4, 2022 10:13:00"), description: 'description', topRated: true }
                            ]
                        }
                        )));
                });

            courseService = getTestBed().get(CourseService);
            expect(courseService).toBeDefined();

            courseService.createCourse(100, 'Some Video', new Date("February 4, 2022 10:13:00"), 'description').subscribe((course) => {
                expect(course).toBeDefined();
                done();
            });
        });
    });

});