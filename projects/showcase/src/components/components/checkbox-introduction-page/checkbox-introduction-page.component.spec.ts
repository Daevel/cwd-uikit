import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxIntroductionPageComponent } from './checkbox-introduction-page.component';

describe('CheckboxIntroductionPageComponent', () => {
  let component: CheckboxIntroductionPageComponent;
  let fixture: ComponentFixture<CheckboxIntroductionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxIntroductionPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxIntroductionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
