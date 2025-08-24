import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwdSkeletonTemplateComponent } from './cwd-skeleton-template.component';

describe('CwdSkeletonTemplateComponent', () => {
  let component: CwdSkeletonTemplateComponent;
  let fixture: ComponentFixture<CwdSkeletonTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CwdSkeletonTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CwdSkeletonTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
