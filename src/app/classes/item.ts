import { Course } from './../interfaces/course';

export class Item implements Course {
    duration: number;
    title: string;
    createdDate: Date;
    description: string;
    id: number;
}