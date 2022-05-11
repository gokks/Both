import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from 'src/app/service/course-service.service';

@Component({
  selector: 'app-topicview',
  templateUrl: './topicview.component.html',
  styleUrls: ['./topicview.component.css']
})
export class TopicviewComponent implements OnInit {
  
  constructor(private courseService:CourseServiceService) { }
data:any;
  ngOnInit(): void {
    this.GetTopicDetailsById()
  }
  GetTopicDetailsById() {
    this.courseService.gettopicdetailsbyid(8).subscribe(res=>{
      console.log(res)
      this.data=res
    })
  }
 
}
