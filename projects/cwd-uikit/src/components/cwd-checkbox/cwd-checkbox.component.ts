import { Component, Input, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cwd-checkbox',
  standalone: true,
  imports: [CommonModule],
  template: `
    <label class="container">
      <input
        type="checkbox"
        [checked]="checkedSignal()"
        (change)="onToggle()"
      />
      @if(label) {
        <span class="label-text">{{ label }}</span>
      }
      <div class="checkmark"></div>
    </label>
  `,
  styleUrls: ['./cwd-checkbox.component.scss']
})
export class CwdCheckboxComponent {
  @Input() label: string = '';
  @Input() checkedSignal: WritableSignal<boolean> = signal(false);

  onToggle() {
    this.checkedSignal.set(!this.checkedSignal());
  }
}
