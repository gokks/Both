import { Component, OnInit } from '@angular/core';
import { TraineeFeedbackService } from 'src/app/service/trainee-feedback.service';

@Component({
  selector: 'app-feedbacktrainee',
  templateUrl: './feedbacktrainee.component.html',
  styleUrls: ['./feedbacktrainee.component.css']
})
export class FeedbacktraineeComponent implements OnInit {

  constructor(private traineeFeedbackService: TraineeFeedbackService) { }
 
  data: any
  ngOnInit(): void {
    this.getAllTraineeFeedback()
  }
  getAllTraineeFeedback() {
    this.traineeFeedbackService.getAllTraineeFeedbackById(3,1).subscribe(res => {
      console.log(res)
      this.data = res
    })
  }
  get(){
    
  }

}
