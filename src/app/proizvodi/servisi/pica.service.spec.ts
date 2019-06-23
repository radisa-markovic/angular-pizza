import { TestBed } from '@angular/core/testing';

import { PicaService } from './pica.service';

describe('PicaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PicaService = TestBed.get(PicaService);
    expect(service).toBeTruthy();
  });
});
