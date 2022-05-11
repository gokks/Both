import { AssignmentStatus } from "./assignmentStatus";
import { Topic } from "./topic";
import { User } from "./user";

export interface Assigment {
    id: number;
    topicId: number;
    statusId: number;
    ownerId: number;
    document: string;
    status: AssignmentStatus | null;
    topic: Topic | null;
    owner: User | null;
}