import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendvicComponent } from './sendvic.component';

describe('SendvicComponent', () => {
  let component: SendvicComponent;
  let fixture: ComponentFixture<SendvicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendvicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendvicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
