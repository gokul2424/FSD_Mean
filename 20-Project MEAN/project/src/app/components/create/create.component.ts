import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Add User';
  angForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router,private userservice: UsersService, private fb: FormBuilder) {
    this.createForm();
   }
  createForm() {
    this.angForm = this.fb.group({
      firstname: ['', Validators.required ],
      lastname: ['', Validators.required ],
      SSID: ['', Validators.required ],
      email: ['', Validators.required ]
   });
  }
  addUser(firstname,lastname,SSID,email) {
      this.userservice.addUser(firstname,lastname,SSID,email);
      this.router.navigate(['index']);
  }
  ngOnInit() {
  }

  

}





  