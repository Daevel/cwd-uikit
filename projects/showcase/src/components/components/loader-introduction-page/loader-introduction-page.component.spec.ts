import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderIntroductionPageComponent } from './loader-introduction-page.component';

describe('LoaderIntroductionPageComponent', () => {
  let component: LoaderIntroductionPageComponent;
  let fixture: ComponentFixture<LoaderIntroductionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderIntroductionPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderIntroductionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
