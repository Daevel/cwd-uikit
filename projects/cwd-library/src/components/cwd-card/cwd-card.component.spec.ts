import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CwdCardComponent } from './cwd-card.component';

describe('CwdCardComponent', () => {
  let component: CwdCardComponent;
  let fixture: ComponentFixture<CwdCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CwdCardComponent],  // <-- IMPORT qui
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CwdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header, body, and footer content', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    compiled.querySelector('.card-header')!.textContent = 'Header';
    compiled.querySelector('.card-body')!.textContent = 'Body';
    compiled.querySelector('.card-footer')!.textContent = 'Footer';

    fixture.detectChanges();

    expect(compiled.querySelector('.card-header')!.textContent).toContain('Header');
    expect(compiled.querySelector('.card-body')!.textContent).toContain('Body');
    expect(compiled.querySelector('.card-footer')!.textContent).toContain('Footer');
  });
});
