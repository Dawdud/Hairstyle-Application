import { Component, OnInit, Input } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() showNavbar: boolean;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
