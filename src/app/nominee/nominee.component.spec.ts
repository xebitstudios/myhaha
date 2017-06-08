import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NomineeComponent } from './nominee.component';

describe('NomineeComponent', () => {
  let component: NomineeComponent;
  let fixture: ComponentFixture<NomineeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NomineeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NomineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
