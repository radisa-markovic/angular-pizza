import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SastojakComponent } from './sastojak.component';

describe('SastojakComponent', () => {
  let component: SastojakComponent;
  let fixture: ComponentFixture<SastojakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SastojakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SastojakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
