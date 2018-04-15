import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private user: UserService) { }

  ngOnInit() {
  }

  loginUser (e) {
    e.preventDefault(); // robi to, co button
    console.log(e);
    let username = e.target.elements[0].value;
    let password = e.target.elements[1].value;
    console.log(username, password);

    if (username === 'admin' && password === 'admin') {
      console.log("logowanie prawidłowe");
      this.user.setUserLoggedIn(true);

      this.router.navigate(['dashboard']);
    }


  }

}
