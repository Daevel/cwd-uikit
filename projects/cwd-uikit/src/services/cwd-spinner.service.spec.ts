import { TestBed } from '@angular/core/testing';

import { CwdSpinnerService } from './cwd-spinner.service';

describe('CwdSpinnerService', () => {
  let service: CwdSpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CwdSpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
