import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { routing } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlertComponent } from './alert/alert.component';
import { AlertService } from './service/alert.service';

import { AuthenticationService } from './service/authentication.service';
import { UserService } from './service/user.service';

import { AuthGuard } from './guard/auth.guard';
import { JwtInterceptorProvider } from './helpers/jwt.interceptor';
import { ErrorInterceptorProvider } from './helpers/error.interceptor';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UploadComponent } from './upload/upload.component';

import { AngularFileUploaderModule } from "angular-file-uploader";

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	HttpClientModule,
    routing,
	AngularFileUploaderModule
  ],
  providers: [
	AuthGuard,
	AlertService,
	JwtInterceptorProvider,
	ErrorInterceptorProvider,
	AuthenticationService,
	UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
