import { TestBed } from '@angular/core/testing';

import { CwdModalService } from './cwd-modal.service';

describe('CwdModalService', () => {
  let service: CwdModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CwdModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
