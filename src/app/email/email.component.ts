import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {AngularFirestore} from 'angularfire2/firestore';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  messageName: String;
  messageEmail: String;
  messageText: String;

  messageSent: boolean;

  constructor(private db: AngularFirestore, public authService: AuthService) {
  }

  ngOnInit() {
  }

  addMessage() {
    this.db.collection('messages').add({
      from: this.messageName,
      email: this.messageEmail,
      message: this.messageText,
    })
      .then(function(docRef) {
        console.log('Pomyślnie dodano wiadomość o Id = ', docRef.id);
      });
    this.messageSent = true;
  }

}
