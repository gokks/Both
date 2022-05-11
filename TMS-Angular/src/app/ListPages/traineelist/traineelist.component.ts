import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';

import { userService } from 'src/app/service/user.service';

@Component({
  selector: 'app-traineelist',
  templateUrl: './traineelist.component.html',
  styleUrls: ['./traineelist.component.css']
})
export class TraineelistComponent implements OnInit {

  data: any;
  constructor(private userService: userService) { }

  ngOnInit(): void {
    this.getAllTrainees()
  }
  getAllTrainees() {
    this.userService.getAllUsersByRoleId(1).subscribe(res => {
      console.log(res)
      this.data = res
    })
  }
}
