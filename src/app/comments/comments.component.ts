import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

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

  constructor(private db: AngularFirestore) { }


  ngOnInit() {
    this.commentsCol = this.db.collection('comments');
    this.comments = this.commentsCol.valueChanges();
  console.log(this.db);

  }
}
