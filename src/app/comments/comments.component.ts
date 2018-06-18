///<reference path="../../../node_modules/@types/node/index.d.ts"/>
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import {Observable, ObservableInput} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {AuthService} from '../auth.service';
import {$} from 'protractor';
import {AngularFireList} from 'angularfire2/database';


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
  quer: Observable<Comment[]>;
  querCol: AngularFirestoreCollection<Comment>;


  constructor(private db: AngularFirestore, public authService: AuthService) { }


  ngOnInit() {
    this.commentsCol = this.db.collection('comments');
    this.comments = this.commentsCol.valueChanges();

    this.querCol = this.db.collection('comments', ref => {
      return ref.where('stars', '==', 5);
    });
    this.quer = this.querCol.valueChanges();




    console.log(this.querCol);

    console.log(this.commentsCol.ref.where('stars', '==', 5));
    console.log("Baza danych:");
    console.log(this.db);
    console.log("czy user jest zalogowany?:");
    console.log(this.authService.isUserEmailLoggedIn);

  }


}
