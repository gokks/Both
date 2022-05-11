import { AttendanceStatus } from "./attendanceStatus";
import { Topic } from "./topic";
import { User } from "./user";

export interface Attendance {
    id: number;
    topicId: number;
    statusId: number;
    ownerId: number;
    status: AttendanceStatus | null;
    topic: Topic | null;
    owner: User | null;
}