import { Component, OnInit } from '@angular/core';
import { userService } from 'src/app/service/userlist.service';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserListPageComponent implements OnInit {
  constructor(private userService: userService) {}
  data:any;
  role = "Head";
  option = "Co-Ordinator";
   ngOnInit(): void {
      this.getUserByRole();
  }
  getUserByRole() {
    this.userService.getAllUsersByRoleId(1).subscribe((res) => {
      console.log(res);
      this.data = res
    });
  }
}


// import { Component, Input, OnInit } from '@angular/core';
// import { userService } from 'src/app/service/userlist.service';

// @Component({
//   selector: 'app-userlist',
//   templateUrl: './userlist.component.html',
//   styleUrls: ['./userlist.component.css']
// })
// export class UserListPageComponent implements OnInit {
//   @Input() id:number = 2;
//   coordinatordata: any
//   trainerdata: any
//   traineedata: any
//   reviewerdata: any
//   data:any

//   constructor(private userService: userService) {}

//   ngOnInit(): void {
//       this.getAllUsersByRoleId();
//   }
//   getAllUsersByRoleId()
//   {
//     this.userService.getAllUsersByRoleId(this.id).subscribe(res =>
//       {
//         console.log(res)
//         this.coordinatordata = res
//       })
//   }
  
// }

