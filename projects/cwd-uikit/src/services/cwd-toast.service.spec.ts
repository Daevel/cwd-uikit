import { TestBed } from '@angular/core/testing';

import { CwdToastService } from './cwd-toast.service';

describe('CwdToastService', () => {
  let service: CwdToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CwdToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
