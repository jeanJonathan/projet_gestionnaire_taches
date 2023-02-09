import { TestBed } from '@angular/core/testing';

import { NomDuServiceService } from './nom-du-service.service';

describe('NomDuServiceService', () => {
  let service: NomDuServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NomDuServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
