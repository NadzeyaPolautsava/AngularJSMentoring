import { Course } from './../interfaces/course';

class Item implements Course {
    duration: number;
    title: string;
    createdDate: Date;
    description: string;
    id: number;
}