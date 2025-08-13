import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CwdIconComponent } from '../cwd-icon/cwd-icon.component';


@Component({
  selector: 'cwd-button',
  imports: [FontAwesomeModule, CwdIconComponent],
  template: `
  <button (click)="onClickButton($event)">
    @if (iconName) {
      <cwd-icon [iconName]="iconName" class="icon-left"></cwd-icon>
    }
      <ng-content></ng-content>
  </button>
  `,
  styleUrl: './cwd-button.component.scss',
  standalone: true
})
export class CwdButtonComponent {

  @Input() iconName?: string;

  @Output() onClick = new EventEmitter<MouseEvent>();

  public onClickButton(event: MouseEvent) {
    this.onClick.emit(event);
  }

}
