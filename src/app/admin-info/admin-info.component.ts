import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {AuthService} from '../auth.service';
import {Observable} from 'rxjs/Observable';

interface Reservation {
  name: string;
  date: string;
  time: string;
  employee: string;
}

interface Message {
  email: string;
  from: string;
  message: string;
}

@Component({
  selector: 'app-admin-info',
  templateUrl: './admin-info.component.html',
  styleUrls: ['./admin-info.component.scss']
})


export class AdminInfoComponent implements OnInit {

  reservationCol: AngularFirestoreCollection<Reservation>;
  reservations: Observable<Reservation[]>;

  messageCol: AngularFirestoreCollection<Message>;
  messages: Observable<Message[]>;

  messagesWid: Observable<any>;




  constructor(private db: AngularFirestore, public authService: AuthService) { }

  ngOnInit() {
    this.reservationCol = this.db.collection('reservations');
    this.reservations = this.reservationCol.valueChanges();

    this.messageCol = this.db.collection('messages');
    this.messages = this.messageCol.valueChanges();

    this.messagesWid = this.messageCol.snapshotChanges().
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Message;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      });


  }

  logout() {
    this.authService.signOut();
  }

  delete(message) {
    this.db.collection('messages').doc(message.id).delete();
  }



}
