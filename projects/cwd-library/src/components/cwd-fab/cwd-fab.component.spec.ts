import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwdFabComponent } from './cwd-fab.component';

describe('CwdFabComponent', () => {
  let component: CwdFabComponent;
  let fixture: ComponentFixture<CwdFabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CwdFabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CwdFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
