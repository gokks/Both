import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseDTO } from '../Models/CourseDTO';

@Injectable({
  providedIn: 'root'
})
export class userService {

  constructor(private http: HttpClient) { }
  baseurl = "https://localhost:7161/User/"
  getAllUsersByRoleId(id: number): Observable<userService[]> {
    return this.http.get<userService[]>(this.baseurl + `GetUsersByRole/${id}`)
  }
}
