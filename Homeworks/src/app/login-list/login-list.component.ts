import { Component, OnInit } from '@angular/core';
import { ListApiService } from './list-api.service';

@Component({
  selector: 'app-login-list',
  templateUrl: './login-list.component.html',
  styleUrls: ['./login-list.component.scss'],
})
export class LoginListComponent implements OnInit {
  constructor(private api: ListApiService) {}

  users: any;

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.api.getMethod().subscribe((res) => {
      this.users = res;
    });
  }
}
