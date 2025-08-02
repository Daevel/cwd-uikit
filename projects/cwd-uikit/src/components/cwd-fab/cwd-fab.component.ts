import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CwdIconComponent } from '../cwd-icon/cwd-icon.component';

@Component({
  selector: 'cwd-fab',
  standalone: true,
  imports: [CwdIconComponent],
  template: `
    <button class="cwd-fab" (click)="onClick($event)">
      <cwd-icon [iconName]="icon"></cwd-icon>
    </button>
  `,
  styleUrls: ['./cwd-fab.component.scss']
})
export class CwdFabComponent {
  @Input() icon: string = '';
  @Output() fabClick = new EventEmitter<Event>();

  onClick(event: Event) {
    this.fabClick.emit(event);
  }
}
