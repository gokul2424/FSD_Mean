import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable()
export class UsersService {

  result: any;
  constructor(private http: HttpClient) {}

  addUser(firstname, lastname, SSID,email) {
    const uri = 'http://localhost:4000/users/add';
    const obj = {
      firstname: firstname,
	    lastname: lastname,
      SSID: SSID,
	    email: email
    };
    this.http.post(uri, obj)
      .subscribe(res =>
          console.log('Done'));
  }

  getUsers() {
    const uri = 'http://localhost:4000/users';
    return this.http.get(uri)
            .pipe(map(res => {
              return res;
            }))
            ;
  }

  editUser(id) {
    const uri = 'http://localhost:4000/users/edit/' + id;
    return this.http.get(uri)
            .pipe(map(res => {
              return res;
            }));
  }

  updateUser(firstname, lastname, SSID, email, id) {
    const uri = 'http://localhost:4000/users/update/' + id;

    const obj = {
      firstname: firstname,
	    lastname: lastname,
      SSID: SSID,
	    email: email
    };
    this.http.post(uri, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteUser(id) {
    console.log("inside delete");
    const uri = 'http://localhost:4000/users/delete/' + id;

    return this
            .http
            .get(uri)
            .pipe(map(res => {
              return res;
            }));
  }
}
