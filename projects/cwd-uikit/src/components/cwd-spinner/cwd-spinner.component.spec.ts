import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwdSpinnerComponent } from './cwd-spinner.component';

describe('CwdSpinnerComponent', () => {
  let component: CwdSpinnerComponent;
  let fixture: ComponentFixture<CwdSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CwdSpinnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CwdSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
