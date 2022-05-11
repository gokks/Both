import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseFeedback } from '../Models/courseFeedback';


@Injectable({
  providedIn: 'root'
})
export class CourseFeedbackService {

  constructor(private http: HttpClient) { }
  baseurl = "https://localhost:7161/CourseFeedback/"
  // https://localhost:7161/CourseFeedback/GetCourseFeedbackBy/2
  getAllCourseFeedbackByID(cid: number,oid:number): Observable<CourseFeedback> {
    return this.http.get<CourseFeedback>(this.baseurl + `GetCourseFeedbackBy/${cid},${oid}`)
  }
}
