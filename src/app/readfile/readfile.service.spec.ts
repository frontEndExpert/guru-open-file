import { TestBed, inject } from '@angular/core/testing';

import { ReadfileService } from './readfile.service';

describe('ReadfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReadfileService]
    });
  });

  it('should be created', inject([ReadfileService], (service: ReadfileService) => {
    expect(service).toBeTruthy();
  }));
});
