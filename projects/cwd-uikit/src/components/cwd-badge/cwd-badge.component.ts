import { CommonModule } from '@angular/common';
import { Component, HostBinding, input } from '@angular/core';

@Component({
  selector: 'cwd-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="badge-content">
      <ng-container *ngIf="!dot()">{{ value() }}</ng-container>
    </span>
  `,
  styleUrls: ['./cwd-badge.component.scss']
})
export class CwdBadgeComponent {
  value = input<string | number>('');
  position = input<'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'>('top-right');
  color = input<'primary' | 'secondary' | 'warn' | 'danger'>('primary');
  variant = input<'text' | 'outlined' | 'filled' | 'default'>('filled');
  disabled = input<boolean>(false);
  dot = input<boolean>(false);

  @HostBinding('class')
  get hostClasses() {
    return `cwd-badge ${this.position()} ${this.color()} ${this.variant()} ${this.dot() ? 'dot' : ''}`;
  }

  @HostBinding('class.disabled')
  get isDisabled() {
    return this.disabled();
  }
}
