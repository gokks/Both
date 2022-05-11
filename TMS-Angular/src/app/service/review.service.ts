import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReviewDTO } from '../Models/ReviewDTO';


@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }
  baseurl = "https://localhost:7161/Review/"
  getReviewById(id: number): Observable<ReviewDTO[]> {
    return this.http.get<ReviewDTO[]>(this.baseurl + `GetReviewById/${id}`)
    
}
getReviewByStatus(statusId: number): Observable<ReviewDTO[]> {
  return this.http.get<ReviewDTO[]>(this.baseurl + `GetReviewByStatus/${statusId}`)
  
}
}
