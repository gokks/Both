import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/Models/department';
import { DepartmentService } from 'src/app/service/departmentlist.service';

@Component({
  selector: 'app-adddepartment',
  templateUrl: './adddepartment.component.html',
  styleUrls: ['./adddepartment.component.css']
})
export class AdddepartmentComponent implements OnInit {
role ="Co-Ordinator"

  constructor(private departmentservice:DepartmentService) { }
  public department:Department={
    id: 1,
    name:"",
    isDisabled: false
  }
  ngOnInit(): void {
  }
  OnSubmit(){
    this.departmentservice.postdepartment(this.department).subscribe(
      res=>{
        console.log(res)
        this.department=res
      }
    )
  }
}
