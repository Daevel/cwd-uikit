import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwdCheckboxGroupComponent } from './cwd-checkbox-group.component';

describe('CwdCheckboxGroupComponent', () => {
  let component: CwdCheckboxGroupComponent;
  let fixture: ComponentFixture<CwdCheckboxGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CwdCheckboxGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CwdCheckboxGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
