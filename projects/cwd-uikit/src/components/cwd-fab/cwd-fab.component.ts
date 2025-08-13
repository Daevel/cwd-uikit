import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CwdIconComponent } from '../cwd-icon/cwd-icon.component';

@Component({
  selector: 'cwd-fab',
  standalone: true,
  imports: [FontAwesomeModule, CwdIconComponent],
  template: `
    <button class="cwd-fab" (click)="onClick($event)">
      @if(iconName) {
        <cwd-icon [iconName]="iconName"></cwd-icon>
      }
    </button>
  `,
  styleUrls: ['./cwd-fab.component.scss']
})
export class CwdFabComponent {
  @Input() iconName?: string;
  @Output() fabClick = new EventEmitter<Event>();

  onClick(event: Event) {
    this.fabClick.emit(event);
  }
}
