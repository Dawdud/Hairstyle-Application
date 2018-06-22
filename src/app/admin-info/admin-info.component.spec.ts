import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInfoComponent } from './admin-info.component';
import {NavbarComponent} from '../navbar/navbar.component';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';


describe('AdminInfoComponent', () => {
  let component: AdminInfoComponent;
  let fixture: ComponentFixture<AdminInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInfoComponent, NavbarComponent ],
      providers: [ AngularFirestore, AngularFirestoreCollection ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


