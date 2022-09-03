import { TestBed } from '@angular/core/testing';

import { CharservService } from './charserv.service';

describe('CharservService', () => {
  let service: CharservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
