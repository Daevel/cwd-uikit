import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwdChipComponent } from './cwd-chip.component';

describe('CwdChipComponent', () => {
  let component: CwdChipComponent;
  let fixture: ComponentFixture<CwdChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CwdChipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CwdChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
