import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideToggleIndtroductionPageComponent } from './slide-toggle-introduction-page.component';

describe('SlideToggleIndtroductionPageComponent', () => {
  let component: SlideToggleIndtroductionPageComponent;
  let fixture: ComponentFixture<SlideToggleIndtroductionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideToggleIndtroductionPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideToggleIndtroductionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
