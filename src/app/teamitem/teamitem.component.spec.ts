import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamitemComponent } from './teamitem.component';

describe('TeamitemComponent', () => {
  let component: TeamitemComponent;
  let fixture: ComponentFixture<TeamitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
