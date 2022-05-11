import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseDTO } from '../Models/CourseDTO';
import { Course } from '../Models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  constructor(private http: HttpClient) { }
  baseurl = "https://localhost:7161/Course/"
  getAllCourses(): Observable<CourseDTO[]> {
    return this.http.get<CourseDTO[]>(this.baseurl + `GetAllCourses`)
  }
  gettopicdetailsbyid(id:number): Observable<Course[]> {
    return this.http.get<Course[]>(this.baseurl + `GetTopicById/${id}`)
  }


  // constructor(private http: HttpClient) { }
  // baseurl = "http://localhost:4200/courselist"
  // getAllUsersByRoleId(id: number): Observable<CourseDTO[]> {
  //   return this.http.get<CourseDTO[]>(this.baseurl + `GetAllCourses/${id}`)
  // }
}
