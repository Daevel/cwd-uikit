import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExposingCardComponent } from './exposing-card.component';

describe('ExposingCardComponent', () => {
  let component: ExposingCardComponent;
  let fixture: ComponentFixture<ExposingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExposingCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExposingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
