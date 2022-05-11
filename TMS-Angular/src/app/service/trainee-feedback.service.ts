import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TraineeFeedback } from '../Models/traineeFeedback';

@Injectable({
  providedIn: 'root'
})
export class TraineeFeedbackService {

  constructor(private http: HttpClient) { }
  baseurl = "https://localhost:7161/TraineeFeedback/"
  // https://localhost:7161/CourseFeedback/GetCourseFeedbackBy/2
  getAllTraineeFeedbackById(cid: number,tid:number): Observable<TraineeFeedback> {
    return this.http.get<TraineeFeedback>(this.baseurl + `GetCourseFeedbackBy/${cid},${tid}`)
  }
}
