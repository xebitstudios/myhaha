import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkitemlistComponent } from './linkitemlist.component';

describe('LinkitemlistComponent', () => {
  let component: LinkitemlistComponent;
  let fixture: ComponentFixture<LinkitemlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkitemlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkitemlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
