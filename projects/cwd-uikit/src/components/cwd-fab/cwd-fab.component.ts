import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CwdIconComponent } from '../cwd-icon/cwd-icon.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'cwd-fab',
  standalone: true,
  imports: [FontAwesomeModule, CwdIconComponent, NgClass],
  template: `
    <button class="cwd-fab" [ngClass]="size" (click)="onClick($event)">
      @if(iconName) {
        <cwd-icon [iconName]="iconName"></cwd-icon>
      }
    </button>
  `,
  styleUrls: ['./cwd-fab.component.scss']
})
export class CwdFabComponent {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() iconName?: string;
  @Output() fabClick = new EventEmitter<MouseEvent>();

  onClick(event: MouseEvent) {
    this.fabClick.emit(event);
  }
}
