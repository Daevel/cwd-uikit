import { CommonModule } from "@angular/common";
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CwdCardComponent } from "../cwd-card/cwd-card.component";
import { CwdFabComponent } from "../cwd-fab/cwd-fab.component";
import { CwdButtonComponent } from "../cwd-button/cwd-button.component";

@Component({
  selector: 'cwd-modal',
  standalone: true,
  imports: [CommonModule, CwdCardComponent, CwdFabComponent, CwdButtonComponent],
  templateUrl: './cwd-modal.component.html',
  styleUrls: ['./cwd-modal.component.scss']
})
export class CwdModalComponent {
  @Input() open = false;
  @Input() title = 'Notifiche';
  @Input() notifications: any[] = [];
  @Input() closeOnBackdrop = true;

  @Input() showFooter = true;

  @Output() closed = new EventEmitter<void>();
  @Output() accepted = new EventEmitter<any>();
  @Output() declined = new EventEmitter<any>();

  openAtButton(event: MouseEvent) {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    this.open = true;
  }

  close() {
    this.open = false;
    this.closed.emit();
  }

  accept(notification: any) { this.accepted.emit(notification); }
  decline(notification: any) { this.declined.emit(notification); }

  onBackdropClick() {
    if (this.closeOnBackdrop) this.close();
  }
}
