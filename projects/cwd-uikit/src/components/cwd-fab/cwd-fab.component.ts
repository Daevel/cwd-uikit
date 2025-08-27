import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CwdIconComponent } from '../cwd-icon/cwd-icon.component';
import { NgClass } from '@angular/common';
import { CwdBadgeComponent } from '../cwd-badge/cwd-badge.component';

@Component({
  selector: 'cwd-fab',
  standalone: true,
  imports: [FontAwesomeModule, CwdIconComponent, CwdBadgeComponent, NgClass],
  template: `
    <button class="cwd-fab" [ngClass]="size" (click)="onClick($event)">
      @if(iconName) {
        <cwd-icon [iconName]="iconName"></cwd-icon>
      }
      @if (badgeValue !== undefined) {
        <cwd-badge [value]="badgeValue" [position]="badgePosition"></cwd-badge>
      }
    </button>
  `,
  styleUrls: ['./cwd-fab.component.scss']
})
export class CwdFabComponent {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() iconName?: string;

  @Input() badgeValue?: number | string;
  @Input() badgePosition: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = 'top-right';

  @Output() fabClick = new EventEmitter<MouseEvent>();

  onClick(event: MouseEvent) {
    this.fabClick.emit(event);
  }
}
