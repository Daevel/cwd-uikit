import { Component, Input, Output, EventEmitter, input, output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CwdIconComponent } from '../cwd-icon/cwd-icon.component';
import { NgClass } from '@angular/common';
import { CwdBadgeComponent } from '../cwd-badge/cwd-badge.component';

@Component({
  selector: 'cwd-fab',
  standalone: true,
  imports: [FontAwesomeModule, CwdIconComponent, CwdBadgeComponent, NgClass],
  template: `
    <button 
  [ngClass]="[position(), color(), size()]" 
  [disabled]="disabled()" 
  class="cwd-fab" 
  (click)="onClick($event)"
>
  @if(iconName()) {
    <cwd-icon [iconName]="iconName()"></cwd-icon>
  }
  @if (badgeValue()) {
    <cwd-badge 
      [value]="badgeValue()" 
      [position]="badgePosition()" 
      [color]="color()"
      [variant]="position()"
      [disabled]="disabled()"
    ></cwd-badge>
  }
</button>

  `,
  styleUrls: ['./cwd-fab.component.scss']
})
export class CwdFabComponent {

  size = input<'small' | 'medium' | 'large'>('medium');
  iconName = input<string | undefined>('');

  color = input<'primary' | 'secondary' | 'warn' | 'danger'>('primary');
  position = input<'text' | 'outlined' | 'filled' | 'default'>('filled');

  disabled = input<boolean>(false);

  badgeValue = input<number | string>(0);
  badgePosition = input<'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'>('top-right');

  fabClick = output<MouseEvent>();

  onClick(event: MouseEvent) {
    this.fabClick.emit(event);
  }
}
