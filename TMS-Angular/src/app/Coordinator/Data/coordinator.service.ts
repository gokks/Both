import { Injectable } from '@angular/core';
import { Coordinator } from './coordinator.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CoordinatorService {

  constructor(private http : HttpClient ) { }

  readonly baseURL = 'http://localhost:7200/api/Create'

  formData: Coordinator = new Coordinator();
}
