import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwdFlexboxComponent } from './cwd-flexbox.component';

describe('CwdFlexboxComponent', () => {
  let component: CwdFlexboxComponent;
  let fixture: ComponentFixture<CwdFlexboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CwdFlexboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CwdFlexboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
