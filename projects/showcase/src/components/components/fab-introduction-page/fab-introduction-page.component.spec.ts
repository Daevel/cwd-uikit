import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabIntroductionPageComponent } from './fab-introduction-page.component';

describe('FabIntroductionPageComponent', () => {
  let component: FabIntroductionPageComponent;
  let fixture: ComponentFixture<FabIntroductionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FabIntroductionPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabIntroductionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
