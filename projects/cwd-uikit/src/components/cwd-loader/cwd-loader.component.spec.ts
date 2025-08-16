import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwdLoaderComponent } from './cwd-loader.component';

describe('CwdLoaderComponent', () => {
  let component: CwdLoaderComponent;
  let fixture: ComponentFixture<CwdLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CwdLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CwdLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
