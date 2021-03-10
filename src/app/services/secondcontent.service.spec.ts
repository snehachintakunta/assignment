import { TestBed } from '@angular/core/testing';

import { SecondcontentService } from './secondcontent.service';

describe('SecondcontentService', () => {
  let service: SecondcontentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecondcontentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
