import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../users.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  users: any;

  constructor(private http: HttpClient, private service: UsersService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.service.getUsers().subscribe(res => {
      this.users = res;
    });
  }
  deleteUser(id) {
    this.service.deleteUser(id).subscribe(res => {
      console.log('Deleted');
    });
}

}
