import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BadgeComponent } from './badge.component';
import { CardComponent } from './card.component';
import { Course } from './Course';

@NgModule({
  declarations: [
    AppComponent, BadgeComponent , CardComponent , Course
  ],
  imports: [
    BrowserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
