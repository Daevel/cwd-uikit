import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwdCardComponent } from './cwd-card.component';

describe('CwdCardComponent', () => {
  let component: CwdCardComponent;
  let fixture: ComponentFixture<CwdCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CwdCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CwdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
