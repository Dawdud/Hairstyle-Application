import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase';
import {AngularFireAuthModule} from 'angularfire2/auth';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  // constructor(private firebaseAuth: AngularFireAuthModule) {
  //   this.user = firebaseAuth;
  // }

}
