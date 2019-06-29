import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NarudzbinaComponent } from './narudzbina.component';

describe('NarudzbinaComponent', () => {
  let component: NarudzbinaComponent;
  let fixture: ComponentFixture<NarudzbinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NarudzbinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NarudzbinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
