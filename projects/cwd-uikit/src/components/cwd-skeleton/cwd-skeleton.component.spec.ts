import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwdSkeletonComponent } from './cwd-skeleton.component';

describe('CwdSkeletonComponent', () => {
  let component: CwdSkeletonComponent;
  let fixture: ComponentFixture<CwdSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CwdSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CwdSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
