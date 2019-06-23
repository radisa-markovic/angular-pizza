import { TestBed } from '@angular/core/testing';

import { SastojciService } from './sastojci.service';

describe('SastojciService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SastojciService = TestBed.get(SastojciService);
    expect(service).toBeTruthy();
  });
});
