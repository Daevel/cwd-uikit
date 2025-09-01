import { CommonModule } from '@angular/common';
import { Component, HostBinding, input, Signal } from '@angular/core';

@Component({
  selector: 'cwd-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card" [ngClass]="['cwd-card--' + color(), 'cwd-card--' + size(), 'cwd-card--' + variant()]">
      <ng-content select="[card-header]"></ng-content>
      <ng-content select="[card-body]"></ng-content>
      <ng-content select="[card-footer]"></ng-content>
    </div>
  `,
  styleUrls: ['./cwd-card.component.scss'],
  host: {
    'class': 'cwd-card',
    'role': 'region',
    '[attr.aria-labelledby]': 'ariaLabelledBy'
  }
})
export class CwdCardComponent {

  // Inputs possono essere valori normali o Signals
  variant = input<'elevated' | 'outlined'>('elevated');
  color = input<'primary' | 'secondary' | 'warn' | 'danger'>('primary');
  size = input<'small' | 'medium' | 'big'>('medium');

  ariaLabelledBy = input<string>();

  @HostBinding('class')
  get hostClasses(): string {
    return [
      `cwd-card--${this.color()}`,
      `cwd-card--${this.size()}`,
      `cwd-card--${this.variant()}`
    ].join(' ');
  }
}
