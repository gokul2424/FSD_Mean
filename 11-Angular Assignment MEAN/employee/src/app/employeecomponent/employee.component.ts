import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/Employee';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../services/employee.service';

@Component({
    selector: 'my-employee',
    template: `
    <table class="table table-bordered">
    <tbody>
    <tr>
      <td>{{id}}</td>
      <td>{{first_name}}</td>
      <td>{{last_name}}</td>
      <td>{{email}}</td>
      <button type="button" class="btn btn-danger" (click)="deleteEmployee(key)">Delete</button>
    </tr>
  </tbody>
</table>
`
})


    
export class EmployeeComponent implements OnInit {

    @Input ('id') id: number = 0

    @Input ('first_name') first_name: string = 'Default'

    @Input ('last_name') last_name: string = 'Default'

    @Input ('email') email: string = 'Default'

    @Input ('gender') gender: string = 'Default'

    @Input ('key') key: number;

    @Output('employeeDeleted') 
    employeeDeleted : EventEmitter<Array<Employee>> = new EventEmitter();

    ngOnInit() { 

    }
    
    deleteEmployee(key:number)
    {
      console.log('deleting',key);    
    
      this.employeeServive.deleteEmployee(key)
      .then(data=> this.employeeDeleted.emit(data as any));
    
    }

    constructor(public http: HttpClient, public employeeServive : EmployeeService) { }

    

}


