import { Component, OnInit } from '@angular/core';
import { Course } from './Course';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

 
  title = 'my-project';
  
  courses : Array<Course>=[
    {title1: "Angular", summary:"angular 1"},
    {title1: "Angular 2", summary:"angular 2"}
    
    
  ];
}
