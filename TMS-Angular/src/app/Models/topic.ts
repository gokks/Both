import { Course } from "./course";
import { Assigment } from "./assignments";
import { Attendance } from "./attendance";

export interface Topic {
    id: number;
    courseId: number;
    name: string;
    duration: string;
    context: string;
    isDisabled: boolean;
    course: Course;
    attendances: Attendance[];
    assigments: Assigment[];

}