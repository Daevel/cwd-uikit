import { Component, input, model } from '@angular/core';

@Component({
  selector: 'cwd-slide-toggle',
  imports: [],
  template: `
   <div class="cwd-slide-toggle" 
         [class.before]="labelPosition() === 'before'"
         [class.after]="labelPosition() === 'after'"
         [class.disabled]="disabled()"
         [class]="color()">

      <label class="text" [for]="toggleId">{{ label() }}</label>

      <div class="toggle-switch">
        <input
          class="toggle-input"
          [id]="toggleId"
          type="checkbox"
          [checked]="checked()"
          (change)="onToggle($event)"
          [disabled]="disabled()" />
        <label class="toggle-label" [for]="toggleId"></label>
      </div>
    </div>
  `,
  styleUrls: ['./cwd-slide-toggle.component.scss']
})
export class CwdSlideToggleComponent {

  label = input<string>('');
  labelPosition = input<'before' | 'after'>('after');
  color = input<'primary' | 'secondary' | 'warn' | 'danger'>('primary');
  disabled = input<boolean>(false);

  checked = model<boolean>(false);

  toggleId = `cwd-toggle-${Math.random().toString(36).substring(2, 9)}`;

  public onToggle(event: Event) {
    const inputEl = event.target as HTMLInputElement;
    this.checked.set(inputEl.checked);
  }
}
