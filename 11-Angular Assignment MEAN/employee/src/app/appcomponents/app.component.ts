import { Component, OnInit } from '@angular/core';
import { Course } from '../models/Course';
import { Employee } from '../models/Employee';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../services/employee.service';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LogService]
})
export class AppComponent implements OnInit
{
  title = 'employee';
  now = new Date();
  messages: Array<string> = []
  constructor(public http: HttpClient,
     public employeeServive : EmployeeService,public logService: LogService) {}

  handleEmployeeDeletion( employees : Array<Employee>)
  {
    console.log('In the parent',employees);
    this.employees = employees;
  }

addEmployee(id : number,first_name : string,
  last_name: string,email : string, gender : string)
{
  this.logService.push(name);
  this.employeeServive.addEmployee(id,first_name,last_name,email,gender)
  .then(data=> this.employees = data as any);
}
  

ngOnInit() 
{ 
  this.messages = this.logService.fetchAll();
     this.employeeServive.fetchEmployee()
    .then(data=> this.employees = data as any);
    
       
}

  courses : Array<Course>=  [  ];

  employees : Array<Employee>=  [  ];

}
