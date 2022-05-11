
import { Course } from "./course";
import { User } from "./user";

export interface CourseFeedback {
    id: number;
    courseId: number;
    ownerId: number;
    feddback: string;
    rating: number;
    course: Course ;
    owner: User;
}