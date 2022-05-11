import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/service/departmentlist.service';

@Component({
  selector: 'app-head-departmentlist',
  templateUrl: './head-departmentlist.component.html',
  styleUrls: ['./head-departmentlist.component.css']
})
export class HeadDepartmentlistComponent implements OnInit {
  role ="Co-Ordinator"
  constructor(private dservice:DepartmentService) { }
  data:any;
  ngOnInit(): void {
    this.GetallDepartment()
  }
GetallDepartment(){
  this.dservice.getAllDepartment().subscribe(res=>{
    console.log(res)
    this.data=res
  })
}
}