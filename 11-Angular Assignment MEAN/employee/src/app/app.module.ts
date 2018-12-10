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

@NgModule({
  declarations: [
    AppComponent , BadgeComponent , CardComponent , EmployeeComponent ,
    CapitalizePipe , SearchCoursesPipe , SearchEmployeePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
