import {
  Component,
  input,
  output,
  signal,
  WritableSignal
} from '@angular/core';
import { CwdFabComponent } from '../../public-api';

@Component({
  selector: 'cwd-chip',
  standalone: true,
  imports: [CwdFabComponent],
  template: `
  @if(visible()) {
    <span class="chip" [class.selected]="selected()" (click)="toggleSelect()">
      <span class="chip-text">
        @if(label() !== undefined) {
          {{ label() }}
        } @else {
          <ng-content></ng-content>
        }
      </span>

      @if(removable()) {
        <cwd-fab size="small" iconName="faXmark" (fabClick)="onRemove($event)"></cwd-fab>
      }
    </span>
  }
  `,
  styleUrls: ['./cwd-chip.component.scss']
})
export class CwdChipComponent {

  public readonly label = input<string | undefined>(undefined);
  public readonly removable = input<boolean>(false);

  public readonly remove = output<void>();

  public readonly selected: WritableSignal<boolean> = signal(false);
  public readonly visible: WritableSignal<boolean> = signal(true);
  public readonly removed: WritableSignal<boolean> = signal(false);

  toggleSelect() {
    this.selected.update(v => !v);
  }

  onRemove(e?: MouseEvent) {
    if (e) e.stopPropagation();
    // nascondi animazione / stato interno
    this.visible.set(false);
    this.removed.set(true);
    // notifica parent
    this.remove.emit();
  }
}
