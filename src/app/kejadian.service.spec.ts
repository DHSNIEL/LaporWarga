import { TestBed } from '@angular/core/testing';

import { KejadianService } from './kejadian.service';

describe('KejadianService', () => {
  let service: KejadianService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KejadianService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
