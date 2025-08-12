import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwdToolbarComponent } from './cwd-toolbar.component';

describe('CwdToolbarComponent', () => {
  let component: CwdToolbarComponent;
  let fixture: ComponentFixture<CwdToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CwdToolbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CwdToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
