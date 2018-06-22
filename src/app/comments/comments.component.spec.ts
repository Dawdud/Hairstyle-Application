import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsComponent } from './comments.component';
import {AngularFirestore} from 'angularfire2/firestore';

describe('CommentsComponent', () => {
  let component: CommentsComponent;
  let fixture: ComponentFixture<CommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsComponent ],
      providers: [ AngularFirestore ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be A, L, M, R or S', () => {
    const result = this.pickLetter();
    const goodResult = (result === 'A' || result === 'L' || result === 'M' || result === 'R' || result === 'S');
    expect(goodResult).toBe(true);
  });
});
