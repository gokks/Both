import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../Models/course';

@Injectable({
  providedIn: 'root'
})
export class TopicviewService {

  constructor(private http: HttpClient) { }
  baseurl ="https://localhost:7161/Course/GetTopicById/"
  gettopicdetailsbyid(): Observable<Course[]> {
    return this.http.get<Course[]>(this.baseurl + 'GetTopicDetailsById')
  }
}
