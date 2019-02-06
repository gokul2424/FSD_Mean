import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './appcomponents/app.component';
import { BadgeComponent } from './employeecomponent/badge.component';
import { CardComponent } from './employeecomponent/card.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { SearchCoursesPipe } from './pipes/searchcourses.pipe';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './employeecomponent/employee.component';
import { SearchEmployeePipe } from './pipes/searchemployee.pipe';
import { EmployeeService } from './services/employee.service';
import { EditComponent } from './employeecomponent/edit.component';
import { Child2Component } from './child/child2.component';
import { Child1Component } from './child/child1.component';
import { StorageServiceModule } from 'angular-webstorage-service';


@NgModule({
  declarations: [
    AppComponent , BadgeComponent , CardComponent , EmployeeComponent ,
    CapitalizePipe , SearchCoursesPipe , SearchEmployeePipe , EditComponent ,
    Child1Component , Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , HttpClientModule, StorageServiceModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
