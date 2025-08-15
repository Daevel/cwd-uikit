import { Component, EventEmitter, Input, Output, signal, WritableSignal } from '@angular/core';
import { CwdFabComponent } from '../../public-api';

@Component({
  selector: 'cwd-chip',
  imports: [CwdFabComponent],
  template: `
  @if(visible()) {
  <span class="chip" [class.selected]="selected()" (click)="toggleSelect()">
    <span class="chip-text">
      <ng-content></ng-content>
    </span>
      @if(removable) {
        <cwd-fab size="small" iconName="faXmark" (fabClick)="onRemove($event)"></cwd-fab>
      }
  </span>
  }
`,
  styleUrl: './cwd-chip.component.scss'
})
export class CwdChipComponent {

  @Input() removable = false;    

  selected: WritableSignal<boolean> = signal(false);
  visible: WritableSignal<boolean> = signal(true);
  removed: WritableSignal<boolean> = signal(false);      

  toggleSelect() {
    this.selected.update(v => !v);
  }

  onRemove(e: MouseEvent) {
    e.stopPropagation();
    this.visible.set(false);
    this.removed.set(true); 
  }

}
