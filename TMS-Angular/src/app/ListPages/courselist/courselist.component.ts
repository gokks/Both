import { Component, OnInit } from '@angular/core';
import { CourseDTO } from 'src/app/Models/CourseDTO';
import { CourseServiceService } from 'src/app/service/course-service.service';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {
  role="Co-Ordinator"
  // constructor(private listService: ListServiceService) { }
  // data: UserDTO[] = []

  constructor(private courseService:CourseServiceService) { }
  public data: CourseDTO[] = []
  ngOnInit(): void {
   this.getAllCourses();
  //  this.disableCourse()
  }
  getAllCourses(){
    this.courseService.getAllCourses().
        subscribe(res => {
          console.log(res)
          this.data=res
        })
  } 
  // disableCourse()
  // {
  //   this.courseService.disableCourse(1).
  // }
}
