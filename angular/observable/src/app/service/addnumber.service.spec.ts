import { TestBed } from '@angular/core/testing';

import { AddnumberService } from './addnumber.service';

describe('AddnumberService', () => {
  let service: AddnumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddnumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
