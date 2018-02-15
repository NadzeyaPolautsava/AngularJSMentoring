import { TitlePipe } from "./title.pipe";

describe('TitlePipe', () => {
    let pipe = new TitlePipe();

    let courses = [
        {
            id: 1,
            duration: 100,
            title: 'Some Video',
            date: new Date("February 4, 2022 10:13:00"),
            description: 'description',
            topRated: true
        },
        {
            id: 2,
            duration: 200,
            title: 'Some Video2',
            date: new Date("February 4, 2016 10:13:00"),
            description: 'description2',
            topRated: true
        },
        { 
            id: 3, 
            duration: 15, 
            title: 'Some Video3', 
            date: new Date("February 4, 2016 10:13:00"), 
            description: 'description2', 
            topRated: true 
        },
    ];

    it('transforms courses to empty list', () => {
        expect(pipe.transform(courses, "abc").length).toBe(0);
    });

    it('transforms courses to the same list', () => {
        expect(pipe.transform(courses, "Some").length).toBe(3);
    });

    it('transforms courses to list with length = 1', () => {
        expect(pipe.transform(courses, "Some Video2").length).toBe(1);
    });

    it('transforms courses to the same list', () => {
        expect(pipe.transform(courses, "").length).toBe(3);
    });
});