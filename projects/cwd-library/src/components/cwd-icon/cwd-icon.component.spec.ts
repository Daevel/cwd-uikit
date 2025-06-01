import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwdIconComponent } from './cwd-icon.component';

describe('CwdIconComponent', () => {
  let component: CwdIconComponent;
  let fixture: ComponentFixture<CwdIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CwdIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CwdIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
