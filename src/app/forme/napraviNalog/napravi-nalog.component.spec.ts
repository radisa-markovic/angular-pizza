import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NapraviNalogComponent } from './napravi-nalog.component';

describe('NapraviNalogComponent', () => {
  let component: NapraviNalogComponent;
  let fixture: ComponentFixture<NapraviNalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NapraviNalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NapraviNalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
