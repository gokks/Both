import { Course } from "./course";
import { Department } from "./department";
import { Role } from "./role";

export interface User {
    id: number;
    roleId: number;
    departmentId: number | null;
    name: string;
    userName: string;
    password: string;
    email: string;
    image: string | null;
    employeeId: string | null;
    isDisabled: boolean | null;
    role: Role | null;
    department: Department | null;
    courses: Course[] | null;
}