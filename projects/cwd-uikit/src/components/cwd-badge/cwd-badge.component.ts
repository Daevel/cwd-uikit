import { CommonModule } from '@angular/common';
import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'cwd-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
  <span class="badge-content"
      [ngStyle]="{ 'background-color': color, 'color': textColor }">
  <ng-container *ngIf="!dot">{{ value }}</ng-container>
  </span>
  `,
  styleUrls: ['./cwd-badge.component.scss']
})
export class CwdBadgeComponent {
  /** Testo o numero nel badge */
  @Input() value: string | number = '';

  /** Posizione del badge */
  @Input() position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = 'top-right';

  /** Colore sfondo */
  @Input() color: string = '#e53935';

  /** Colore testo */
  @Input() textColor: string = '#fff';

  /** Modalità "dot" → solo pallino senza numero */
  @Input() dot: boolean = false;

  @HostBinding('class') get hostClasses() {
    return `cwd-badge ${this.position} ${this.dot ? 'dot' : ''}`;
  }
}
