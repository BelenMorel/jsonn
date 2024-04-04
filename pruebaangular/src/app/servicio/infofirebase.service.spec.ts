import { TestBed } from '@angular/core/testing';

import { InfofirebaseService } from './infofirebase.service';

describe('InfofirebaseService', () => {
  let service: InfofirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfofirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
