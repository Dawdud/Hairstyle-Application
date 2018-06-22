import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Reservation {
  name: string;
  date: string;
  time: string;
  employee: string;
}

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  year = new Date().getFullYear();
  month = new Date().getMonth();
  day = new Date().getDate();

  today = `${this.year}-${this.month}-${this.day}`;

  hours: string[] = [
   '8:00', '9:00', '10:00', '11:00',
    '12:00', '13:00', '14:00', '15:00',
    '16:00', '17:00', '18:00', '19:00'
  ];

  employees: string[] = [
    'Damian', 'Daniel', 'Dawid', 'Radek'
    ];

  // reservation
  addedEmployee: string;
  addedDate: string;
  addedTime: string;

  reservationCol: AngularFirestoreCollection<Reservation>;
  reservations: Observable<Reservation[]>;

  reservationsWithId: Observable<any>;

  // comments
  birthDate: number;
  addedCommenttext: string;
  addedName: string;
  addedStars: number;

  commentInfo = false;
  canComment = false;

  constructor(private db: AngularFirestore, public authService: AuthService) { }

  ngOnInit() {
    this.reservationCol = this.db.collection('reservations');
    this.reservations = this.reservationCol.valueChanges();

    this.reservationsWithId = this.reservationCol.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Reservation;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    });
  }

  makeReservation() {
    this.db.collection('reservations').add({
      name: this.authService.currentUserName,
      date: this.addedDate,
      time: this.addedTime,
      employee: this.addedEmployee
    });

    this.addedDate = null;
    this.addedTime = null;
    this.addedEmployee = null;

    this.canComment = true;
  }

  addComment() {
    this.db.collection('comments').add({
      age: 2018 - this.birthDate,
      commenttext: this.addedCommenttext,
      name: this.addedName,
      stars: this.addedStars
    });

    this.addedName = null;
    this.birthDate = null;
    this.addedCommenttext = null;

    this.canComment = false;
    this.commentInfo = true;
  }

  delete(reservation) {
    // console.log(reservation);
    this.db.collection('reservations').doc(reservation.id).delete();
  }

}
