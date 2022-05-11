import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../Models/department';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }
  baseurl = "https://localhost:7161/api/Dashboard/"
  getUserCount(): Observable<DashboardService[]> {
    return this.http.get<DashboardService[]>(this.baseurl + `GetUserCount`)
  }

  getCourseCount(): Observable<DashboardService[]> {
    return this.http.get<DashboardService[]>(this.baseurl + `GetCourseCount`)
  }

  getReviewCount(): Observable<DashboardService[]> {
    return this.http.get<DashboardService[]>(this.baseurl + `GetReviewCount`)
  }

  getDepartmentCount(): Observable<DashboardService[]> {
    return this.http.get<DashboardService[]>(this.baseurl + `GetDepartmentCount`)
  }
}
