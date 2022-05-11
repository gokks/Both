import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseDTO } from '../Models/CourseDTO';

@Injectable({
  providedIn: 'root'
})
export class userService {

  constructor(private http: HttpClient) { }
  baseurl = "http://localhost:4200/courselist/"
  getAllUsersByRoleId(id: number): Observable<CourseDTO[]> {
    return this.http.get<CourseDTO[]>(this.baseurl + `GetAllCourses/${id}`)
  }
}
