import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CwdCheckboxComponent } from '../cwd-checkbox/cwd-checkbox.component';

@Component({
  selector: 'cwd-checkbox-group',
  standalone: true,
  imports: [CommonModule, CwdCheckboxComponent],
  template: `
    <div class="cwd-checkbox-group">
      <cwd-checkbox
        *ngFor="let item of options"
        [label]="item.label"
        [(checked)]="item.checked"
        (checkedChange)="onChange(item)"
      ></cwd-checkbox>
    </div>
  `,
  styleUrls: ['./cwd-checkbox-group.component.scss']
})
export class CwdCheckboxGroupComponent {
  @Input() options: { label: string; checked: boolean }[] = [];

  onChange(item: { label: string; checked: boolean }) {
    // Puoi notificare il parent component oppure gestire logica specifica
    console.log('Changed:', item);
  }
}
