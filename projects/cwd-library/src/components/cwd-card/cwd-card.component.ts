import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CwdButtonComponent } from '../cwd-button/cwd-button.component';


@Component({
  selector: 'cwd-card',
  imports: [CwdButtonComponent],
  templateUrl: './cwd-card.component.html',
  styleUrl: './cwd-card.component.scss',
  standalone: true
})
export class CwdCardComponent {
  @Input() closeButton: boolean = false;
  @Output() close = new EventEmitter<void>();

  onCloseClick() {
    this.close.emit();
  }

}
