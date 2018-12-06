import { Component, OnInit } from '@angular/core';
import { Course } from './Course';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  title = 'employee';
  now = new Date();

  constructor(public http: HttpClient) {}

  ngOnInit() { 

    this.http.get('http://localhost:4200/assets/courses.json')
    .toPromise()
    .then(data=>{
      console.log(data);
      this.courses= data;
    })
        
    }



  courses : Array<Course>=
  [
      
    
  ];

}
