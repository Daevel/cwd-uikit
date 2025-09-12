import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputIntroductionPageComponent } from './input-introduction-page.component';

describe('InputIntroductionPageComponent', () => {
  let component: InputIntroductionPageComponent;
  let fixture: ComponentFixture<InputIntroductionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputIntroductionPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputIntroductionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
