///<reference path="../../../node_modules/@types/node/index.d.ts"/>
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {AuthService} from '../auth.service';



interface Comment {
  age: number;
  commenttext: string;
  name: string;
  stars: number;
}

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})

export class CommentsComponent implements OnInit {

  commentsCol: AngularFirestoreCollection<Comment>;
  comments: Observable<Comment[]>;

  // test zapytania
  querCol: AngularFirestoreCollection<Comment>;
  quer: Observable<Comment[]>;

  rand: string;

  constructor(private db: AngularFirestore, public authService: AuthService) { }


  ngOnInit() {
    this.commentsCol = this.db.collection('comments');
    this.comments = this.commentsCol.valueChanges();

    this.rand = pickLetter();
    console.log(this.rand);

    this.querCol = this.db.collection('comments', ref => {
      return ref.orderBy('name').limit(3).startAt(this.rand);
    });



    this.quer = this.querCol.valueChanges();




    console.log(this.querCol);

    console.log(this.commentsCol.ref.where('stars', '==', 5));
    console.log('Baza danych:');
    console.log('db:');
    console.log('czy user jest zalogowany?:');
    console.log(this.authService.isUserEmailLoggedIn);

    function pickLetter() {
      let letter = '';
      let possible = 'ALMRS';
      letter = possible.charAt(Math.floor(Math.random() * possible.length));
      return letter;
    }


  }


}
