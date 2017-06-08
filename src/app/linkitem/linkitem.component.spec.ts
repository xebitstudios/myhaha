import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkitemComponent } from './linkitem.component';

describe('LinkitemComponent', () => {
  let component: LinkitemComponent;
  let fixture: ComponentFixture<LinkitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
