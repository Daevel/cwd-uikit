import { Component, Input, model, signal } from '@angular/core';

@Component({
  selector: 'cwd-slide-toggle',
  imports: [],
  template: `
   <div class="cwd-slide-toggle" 
         [class.before]="labelPosition === 'before'"
         [class.after]="labelPosition === 'after'">
      
      <label class="text" [for]="toggleId">{{ label }}</label>

      <div class="toggle-switch">
        <input
          class="toggle-input"
          [id]="toggleId"
          type="checkbox"
          [checked]="checked()"
          (change)="onToggle($event)" />
        <label class="toggle-label" [for]="toggleId"></label>
      </div>
    </div>
  `,
  styleUrl: './cwd-slide-toggle.component.scss'
})
export class CwdSlideToggleComponent {

  @Input() label: string = '';
  @Input() labelPosition: 'before' | 'after' = 'after';
  // stato checked controllabile dall'esterno
  checked = model<boolean>(false);

  // id univoco per l'input/label (utile se usi più slide-toggle nella stessa pagina)
  toggleId = `cwd-toggle-${Math.random().toString(36).substring(2, 9)}`;

  onToggle(event: Event) {
    const input = event.target as HTMLInputElement;
    this.checked.set(input.checked);
  }

}
