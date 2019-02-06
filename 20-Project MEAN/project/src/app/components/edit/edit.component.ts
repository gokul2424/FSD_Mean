import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from './../../users.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  user: any;
  angForm: FormGroup;
  title = 'Edit User';
  constructor(private route: ActivatedRoute, private router: Router, private service: UsersService, private fb: FormBuilder) {
    this.createForm();
   }

  createForm() {
    this.angForm = this.fb.group({
      fisrtname: ['', Validators.required ],
      lastname: ['', Validators.required ],
      SSID: ['', Validators.required ],
      email: ['', Validators.required ]
   });
  }

  updateUser(fisrtname, lastname,SSID,email) {
    this.route.params.subscribe(params => {
    this.service.updateUser(fisrtname, lastname,SSID,email, params['id']);
    this.router.navigate(['index']);
  });
}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.user = this.service.editUser(params['id']).subscribe(res => {
        this.user = res;
      });
    });
  }

  

}
