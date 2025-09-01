import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIntroductionPageComponent } from './card-introduction-page.component';

describe('CardIntroductionPageComponent', () => {
  let component: CardIntroductionPageComponent;
  let fixture: ComponentFixture<CardIntroductionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardIntroductionPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardIntroductionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
