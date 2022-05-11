import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheduledreview',
  templateUrl: './scheduledreview.component.html',
  styleUrls: ['./scheduledreview.component.css']
})
export class ScheduledreviewComponent implements OnInit {
  ReviewService: any;
  Department:any;

  constructor() { }

  ngOnInit(): void {
  }
  OnSubmit(){
    this.ReviewService.addCard(this.ReviewService).subscribe(
      (      response: any) => {
        console.log(response);
      }
    )

    }
  }