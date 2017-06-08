import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopdetailComponent } from './workshopdetail.component';

describe('WorkshopdetailComponent', () => {
  let component: WorkshopdetailComponent;
  let fixture: ComponentFixture<WorkshopdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
