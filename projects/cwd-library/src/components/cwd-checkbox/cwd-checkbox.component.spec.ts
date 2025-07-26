import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwdCheckboxComponent } from './cwd-checkbox.component';

describe('CwdCheckboxComponent', () => {
  let component: CwdCheckboxComponent;
  let fixture: ComponentFixture<CwdCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CwdCheckboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CwdCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
