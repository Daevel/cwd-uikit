import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cwd-checkbox',
  standalone: true,
  imports: [CommonModule],
  template: `
    <label class="container">
      <input
        type="checkbox"
        [checked]="checked"
        (change)="onToggle()"
      />
      <div class="checkmark"></div>
      <span class="label-text" *ngIf="label">{{ label }}</span>
    </label>
  `,
  styleUrls: ['./cwd-checkbox.component.scss']
})
export class CwdCheckboxComponent {
  @Input() checked = false;
  @Input() label: string = '';
  @Output() checkedChange = new EventEmitter<boolean>();

  onToggle() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
