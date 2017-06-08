import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamitemlistComponent } from './teamitemlist.component';

describe('TeamitemlistComponent', () => {
  let component: TeamitemlistComponent;
  let fixture: ComponentFixture<TeamitemlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamitemlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamitemlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
