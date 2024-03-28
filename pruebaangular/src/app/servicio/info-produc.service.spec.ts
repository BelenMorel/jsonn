import { TestBed } from '@angular/core/testing';

import { InfoProducService } from './info-produc.service';

describe('InfoProducService', () => {
  let service: InfoProducService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoProducService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
