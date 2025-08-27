import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwdBadgeComponent } from './cwd-badge.component';

describe('CwdBadgeComponent', () => {
  let component: CwdBadgeComponent;
  let fixture: ComponentFixture<CwdBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CwdBadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CwdBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
