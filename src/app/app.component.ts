import { Component } from '@angular/core';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'less8DDDD';
  num1 = '34.54564378';
num2 = 35.6;

datee = new Date().getTime();

users: any[];

  constructor(private userService: UserService) {
  this.userService.users()
    .subscribe(users => this.users = users);
  }

}
