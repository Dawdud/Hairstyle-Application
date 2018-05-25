import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeeComponent } from './employee/employee.component';
import { HeaderComponent } from './header/header.component';

import { RouterModule, Routes} from '@angular/router';
import { AuthGuard } from './auth.guard';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AuthService} from './auth.service';
import {FormsModule} from '@angular/forms';
import { UserInfoComponent } from './user-info/user-info.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent} from './contact/contact.component';
import { CommentsComponent } from './comments/comments.component';
import { EmailComponent } from './email/email.component';
import { PricelistComponent } from './pricelist/pricelist.component';
import {routes} from './app.router';
const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user',
    // canActivate: [AuthGuard],
    component: UserInfoComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent,
    UserInfoComponent,
    AboutComponent,
    ContactComponent,
    EmployeeComponent,
    HeaderComponent,
    CommentsComponent,
    EmailComponent,
    PricelistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule, 
    routes
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
