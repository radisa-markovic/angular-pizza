import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaruciProizvodComponent } from './naruci-proizvod.component';

describe('NaruciProizvodComponent', () => {
  let component: NaruciProizvodComponent;
  let fixture: ComponentFixture<NaruciProizvodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaruciProizvodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaruciProizvodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
