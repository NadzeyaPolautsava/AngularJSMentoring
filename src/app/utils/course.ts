interface Course {
    duration: number;
    name: string;
    createdDate: Date;

    save(params:Course): Course;
    delete(): void;
}