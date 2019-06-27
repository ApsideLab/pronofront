import { TestBed } from '@angular/core/testing';

import { ScaleService } from './scale.service';

describe('ScaleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScaleService = TestBed.get(ScaleService);
    expect(service).toBeTruthy();
  });
});
