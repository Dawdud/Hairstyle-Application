import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserInfoComponent } from './user-info/user-info.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent} from './contact/contact.component';
import { CommentsComponent } from './comments/comments.component';
import {AngularFirestore} from 'angularfire2/firestore';
import { MapComponent } from './map/map.component';
import { InfoComponent } from './info/info.component';
import { EmailComponent } from './email/email.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PricelistComponent } from './pricelist/pricelist.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AdminInfoComponent } from './admin-info/admin-info.component';
import { ForbiddenValidatorDirective } from './forbidden-validator.directive';

const appRoutes: Routes = [
  // {
  //   path: '',
  //   component: LoginComponent
  // },
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
  },
  {
    path: '',
    component: HomepageComponent
  },
  // {
  //   path: 'portfolio',
  //   component: PortfolioComponent
  // },
  {
    path: 'gallery/:id/:name',
    component: GalleryComponent
  },
  {
    path: 'admin',
    component: AdminInfoComponent
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
    MapComponent,
    InfoComponent,
    EmailComponent,
    HomepageComponent,
    PortfolioComponent,
    PricelistComponent,
    GalleryComponent,
    AdminInfoComponent,
    ForbiddenValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCM9gJcjIfI-mF4N3OtLcHHKL2WQBAmf5M'
    })
  ],
  providers: [AuthGuard, AuthService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
