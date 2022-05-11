import { Component, OnInit } from '@angular/core';
import { CourseFeedback } from 'src/app/Models/courseFeedback';
import { CourseFeedbackService } from 'src/app/service/course-feedback.service';

@Component({
  selector: 'app-coursefeedback',
  templateUrl: './coursefeedback.component.html',
  styleUrls: ['./coursefeedback.component.css']
})
export class CoursefeedbackComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }
  constructor(private courseFeedbackService: CourseFeedbackService) { }
 
  data: any
  ngOnInit(): void {
    this.getAllFeedback()
  }
  getAllFeedback() {
    this.courseFeedbackService.getAllCourseFeedbackByID(3,1).subscribe(res => {
      console.log(res)
      this.data = res
    })
  }
  get(){
    
  }
}
