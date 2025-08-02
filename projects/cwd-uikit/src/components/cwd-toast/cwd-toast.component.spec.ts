import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwdToastComponent } from './cwd-toast.component';

describe('CwdToastComponent', () => {
  let component: CwdToastComponent;
  let fixture: ComponentFixture<CwdToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CwdToastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CwdToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create toast component', () => {
    expect(component).toBeTruthy();
  });
});
