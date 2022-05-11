import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  role = "Co-Ordinator"

  userdata: any;
  deptdata: any;
  coursedata: any;
  reviewdata: any;
  

  constructor(private DashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getUserCount()
    this.getCourseCount()
    this.getReviewCount()
    this.getDepartmentCount()
  }
  getUserCount(){
    this.DashboardService.getUserCount().subscribe(res =>
      {
        console.log(res)
        this.userdata = res
      })
  }
  getCourseCount(){
    this.DashboardService.getCourseCount().subscribe(res =>
      {
        console.log(res)
        this.coursedata = res
      })
  }
  getReviewCount(){
    this.DashboardService.getReviewCount().subscribe(res =>
      {
        console.log(res)
        this.reviewdata = res
      })
  }
  getDepartmentCount(){
    this.DashboardService.getDepartmentCount().subscribe(res =>
      {
        console.log(res)
        this.deptdata = res
      })
  }
}
