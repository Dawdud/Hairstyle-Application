import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private isUserLoggedIn: boolean;
  private username;

  constructor() {
    this.isUserLoggedIn = false;

  }

  getIsUserLoggedIn() {
    return this.isUserLoggedIn;
  }

  setUserLoggedIn(value) {
    this.isUserLoggedIn = value;
  }

  getUsername() {
    return this.username;
  }

  setUsername(value) {
    this.username = value;
  }

}
