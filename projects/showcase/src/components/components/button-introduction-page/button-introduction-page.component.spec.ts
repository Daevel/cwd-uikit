import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIntroductionPageComponent } from './button-introduction-page.component';

describe('ButtonIntroductionPageComponent', () => {
  let component: ButtonIntroductionPageComponent;
  let fixture: ComponentFixture<ButtonIntroductionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonIntroductionPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonIntroductionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
