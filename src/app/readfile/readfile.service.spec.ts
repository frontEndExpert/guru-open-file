import { TestBed, inject } from '@angular/core/testing';

import { ReadfileService } from './readfile.service';
import { HttpModule }	  from '@angular/http';

describe('ReadfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReadfileService],
      imports: [HttpModule]
    });
  });

  it('should be created', inject([ReadfileService], (service: ReadfileService) => {
    expect(service).toBeTruthy();
  }));

  it('Should load file.txt successfuly', 
  inject([ReadfileService], (readfileservice) => {

  expect(readfileservice).toBeDefined();

  expect(readfileservice.getFiles('file.txt',1)['status'])
                        .toBe('200');
}));
  

});
