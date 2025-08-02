import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwdButtonComponent } from './cwd-button.component';

describe('CwdButtonComponent', () => {
  let component: CwdButtonComponent;
  let fixture: ComponentFixture<CwdButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CwdButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CwdButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the button component', () => {
    expect(component).toBeTruthy();
  });
});
