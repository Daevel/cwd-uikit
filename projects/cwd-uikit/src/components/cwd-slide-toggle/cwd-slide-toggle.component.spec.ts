import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwdSlideToggleComponent } from './cwd-slide-toggle.component';

describe('CwdSlideToggleComponent', () => {
  let component: CwdSlideToggleComponent;
  let fixture: ComponentFixture<CwdSlideToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CwdSlideToggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CwdSlideToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
