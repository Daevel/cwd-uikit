import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardTestComponent } from '../test-components/card-test/card-test.component';

describe('CwdCardComponent Content Projection', () => {
  let fixture: ComponentFixture<CardTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardTestComponent);
    fixture.detectChanges();
  });

  it('should project content into header, body, and footer slots', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    const header = compiled.querySelector('[card-header]');
    const body = compiled.querySelector('[card-body]');
    const footer = compiled.querySelector('[card-footer]');

    expect(header).toBeTruthy();
    expect(body).toBeTruthy();
    expect(footer).toBeTruthy();

    expect(header!.textContent).toContain('Header');
    expect(body!.textContent).toContain('Body');
    expect(footer!.textContent).toContain('Footer');
  });
});

