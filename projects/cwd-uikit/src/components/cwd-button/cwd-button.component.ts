import { Component, input, output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CwdIconComponent } from '../cwd-icon/cwd-icon.component';
import { CwdBadgeComponent } from '../cwd-badge/cwd-badge.component';
import { NgClass } from '@angular/common';


@Component({
  selector: 'cwd-button',
  imports: [FontAwesomeModule, CwdIconComponent, CwdBadgeComponent, NgClass],
  template: `
  <button 
    (click)="onClickButton($event)" 
    [ngClass]="[position(), color()]"
    [disabled]="disabled()">
    @if (iconName()) {
      <cwd-icon [iconName]="iconName()" [ngClass]="'icon-' + iconPosition()"></cwd-icon>
    }
      <ng-content></ng-content>

    @if (badgeValue()) {
    <cwd-badge [value]="badgeValue()" [position]="badgePosition()"></cwd-badge>
    }
  </button>
  `,
  styleUrl: './cwd-button.component.scss',
  standalone: true
})
export class CwdButtonComponent {

  iconName = input<string>();
  iconPosition = input<'left' | 'right'>('left');

  color = input<'primary' | 'secondary' | 'warn' | 'danger'>('primary');

  badgeValue = input<string | number>('');
  badgePosition = input<'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'>('top-right');

  position = input<'text' | 'outlined' | 'filled' | 'default'>('filled');
  disabled = input<boolean>(false);

  onClick = output<MouseEvent>();

  public onClickButton(event: MouseEvent) {
    this.onClick.emit(event);
  }

}
