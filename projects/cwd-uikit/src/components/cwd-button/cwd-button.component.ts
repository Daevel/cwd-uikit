import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CwdIconComponent } from '../cwd-icon/cwd-icon.component';
import { CwdBadgeComponent } from '../cwd-badge/cwd-badge.component';


@Component({
  selector: 'cwd-button',
  imports: [FontAwesomeModule, CwdIconComponent, CwdBadgeComponent],
  template: `
  <button (click)="onClickButton($event)">
    @if (iconName) {
      <cwd-icon [iconName]="iconName" class="icon-left"></cwd-icon>
    }
      <ng-content></ng-content>

    @if (badgeValue) {
    <cwd-badge [value]="badgeValue" [position]="badgePosition"></cwd-badge>
    }
  </button>
  `,
  styleUrl: './cwd-button.component.scss',
  standalone: true
})
export class CwdButtonComponent {

  @Input() iconName?: string;
  @Input() badgeValue?: string | number;
  @Input() badgePosition: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = 'top-right';


  @Output() onClick = new EventEmitter<MouseEvent>();

  public onClickButton(event: MouseEvent) {
    this.onClick.emit(event);
  }

}
