import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwdModalComponent } from './cwd-modal.component';

describe('CwdModalComponent', () => {
  let component: CwdModalComponent;
  let fixture: ComponentFixture<CwdModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CwdModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CwdModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
