import { CourseStatus } from "./courseStatus";
import { User } from "./user";
import { Department } from "./department";
import { Topic } from "./topic";
import { CourseFeedback } from "./courseFeedback";

export interface Course {
    id: number;
    statusId: number;
    trainerId: number;
    departmentId: number;
    name: string;
    duration: string;
    description: string;
    isDisabled: boolean;
    status: CourseStatus | null;
    trainer: User | null;
    department: Department | null;
    topics: Topic[] | null;
    trainees: User[] | null;
    feedbacks: CourseFeedback[] | null;
}