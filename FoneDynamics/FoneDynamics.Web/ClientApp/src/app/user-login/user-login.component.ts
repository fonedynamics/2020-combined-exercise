import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';
import { Router } from "@angular/router";
import { User } from '../../view-models/User';
import { TokenStorageService } from '../services/tokenStorageService';




@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  isLoggedIn = false;

  user: User = {
    userName: '',
    password: ''
  };

  newUser: User = {
    userName: 'mon',
    password: '1234567'
  };


  constructor(private userService: UsersDataService, private router: Router, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }


  onRegisterUser(user: User) {
    this.userService.registerUser(this.user).subscribe(user => {
      this.newUser = user;
    });
  }

  onAuthenticateUser(userName: string, password: string) {
    this.user.userName = userName;
    this.user.password = password;

    this.userService.authenticateUser(this.user).subscribe(data => {
      //this.userToken = user;
      this.tokenStorage.saveToken(data.token);
      this.tokenStorage.saveUser(data);
      this.isLoggedIn = true;
      this.router.navigate(['customer']);

    }, () => alert('Invalid username/password' ));
  }


  

}
