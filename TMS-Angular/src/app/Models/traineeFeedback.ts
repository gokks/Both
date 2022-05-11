import { Course } from "./course";
import { User } from "./user";

export interface TraineeFeedback {
    id: number;
    traineeId: number;
    trainerId: number;   
    courseId: number;  
    feedback: string;
    course: Course;
    trainee: User;
    trainer: User;
}