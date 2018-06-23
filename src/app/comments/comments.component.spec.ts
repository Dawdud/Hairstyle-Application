import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CommentsComponent} from './comments.component';
import {AngularFirestore} from 'angularfire2/firestore';
import {AuthService} from '../auth.service';
import {instance, mock} from 'ts-mockito';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CommentsComponent', () => {
  let component: CommentsComponent;
  let fixture: ComponentFixture<CommentsComponent>;

  let angularFirestoreMock: AngularFirestore;
  let authServiceMock: AuthService;

  beforeEach(async(() => {
    angularFirestoreMock = mock(AngularFirestore);
    authServiceMock = mock(AuthService);

    TestBed.configureTestingModule({
      declarations: [CommentsComponent],
      providers: [{
        provide: AngularFirestore,
        useFactor: () => instance(angularFirestoreMock)
      }, {
        provide: AuthService,
        useFactor: () => instance(authServiceMock)
      }
      ],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsComponent);
    component = fixture.componentInstance;
  });

  fit('should be A, L, M, R or S', () => {
    const result = component.pickLetter();
    const goodResult = (result === 'A' || result === 'L' || result === 'M' || result === 'R' || result === 'S');
    expect(goodResult).toBe(true);
  });
});
