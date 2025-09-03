import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipIntroductionPageComponent } from './tooltip-introduction-page.component';

describe('TooltipIntroductionPageComponent', () => {
  let component: TooltipIntroductionPageComponent;
  let fixture: ComponentFixture<TooltipIntroductionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TooltipIntroductionPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TooltipIntroductionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
