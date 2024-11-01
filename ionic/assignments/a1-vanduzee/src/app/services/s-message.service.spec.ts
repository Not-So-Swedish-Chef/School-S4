import { TestBed } from '@angular/core/testing';

import { SMessageService } from './s-message.service';

describe('SMessageService', () => {
  let service: SMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
