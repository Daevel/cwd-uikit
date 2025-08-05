import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwdInputComponent } from './cwd-input.component';

describe('CwdIconComponent', () => {
  let component: CwdInputComponent;
  let fixture: ComponentFixture<CwdInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CwdInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CwdInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the input component', () => {
    expect(component).toBeTruthy();
  });
});
