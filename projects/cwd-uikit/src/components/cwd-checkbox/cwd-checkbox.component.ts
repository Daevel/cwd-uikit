import { CommonModule } from "@angular/common";
import { Component, input, output } from "@angular/core";

@Component({
  selector: 'cwd-checkbox',
  standalone: true,
  imports: [CommonModule],
  template: `
    <label 
      class="container"
      [ngClass]="[color(), position(), disabled() ? 'disabled' : '']"
    >
      <input
        [disabled]="disabled()"
        type="checkbox"
        [checked]="checked()"
        (change)="onToggle()"
      />
      @if(label()) {
        <span class="label-text">{{ label() }}</span>
      }
      <div class="checkmark"></div>
    </label>
  `,
  styleUrls: ['./cwd-checkbox.component.scss']
})
export class CwdCheckboxComponent {
  checked = input(false);
  disabled = input(false);
  label = input<string>('');
  color = input<'primary' | 'secondary' | 'warn' | 'danger'>('primary');
  position = input<'left' | 'right'>('right');

  checkedChange = output<boolean>();

  onToggle() {
    const newValue = !this.checked();
    this.checkedChange.emit(newValue);
  }
}
