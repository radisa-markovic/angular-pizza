import { TestBed } from '@angular/core/testing';

import { NarudzbinaService } from './narudzbina.service';

describe('NarudzbinaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NarudzbinaService = TestBed.get(NarudzbinaService);
    expect(service).toBeTruthy();
  });
});
