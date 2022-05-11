import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/Models/course';
import { CourseDTO } from 'src/app/Models/CourseDTO';
import { Topic } from 'src/app/Models/topic';



import { TopiclistService } from 'src/app/service/topiclist.service';
@Component({
  selector: 'app-topiclist',
  templateUrl: './topiclist.component.html',
  styleUrls: ['./topiclist.component.css']
})
export class TopiclistComponent implements OnInit {
  role = "Trainer"
  constructor(private topicService:TopiclistService ) { }
  data:any;
  coursedata:Course ={
    id: 0,
    statusId: 0,
    trainerId: 0,
    departmentId: 0,
    name: 'ASP.Net',
    duration: '50 hours',
    description: 'FrameWork',
    isDisabled: false,
    status: null,
    trainer: null,
    department: null,
    topics: null,
    trainees: null,
    feedbacks: null
  }
   
  ngOnInit(): void {
    this.getAllTopics();
  }

  getAllTopics(){
    this.topicService.getAllTopicByCourseId(5).
      subscribe(res =>{
        console.log(res)
        this.data=res
      })  
  }


// constructor(private topicService: TopiclistService) { }
//   data: TopicDTO[] = []
//   ngOnInit(): void {
//     this.getAll()
//   }
//   getAll() {
//     this.topicService.getAllTopicByCourseId(1).subscribe(res => {
//       console.log(res)
//       this.data = res
//     })
//   }
}
