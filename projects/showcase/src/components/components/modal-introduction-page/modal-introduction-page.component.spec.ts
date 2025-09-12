import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIntroductionPageComponent } from './modal-introduction-page.component';

describe('ModalIntroductionPageComponent', () => {
  let component: ModalIntroductionPageComponent;
  let fixture: ComponentFixture<ModalIntroductionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalIntroductionPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalIntroductionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
