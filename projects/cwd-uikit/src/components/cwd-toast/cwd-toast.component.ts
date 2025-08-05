import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CwdFabComponent } from '../cwd-fab/cwd-fab.component';

@Component({
  selector: 'cwd-toast',
  imports: [NgClass,CwdFabComponent],
  templateUrl: './cwd-toast.component.html',
  styleUrl: './cwd-toast.component.scss',
  standalone: true
})
export class CwdToastComponent {
  @Input() visible = true;
  @Input() message = ''; // aggiungi questa riga

  close() {
    this.visible = false;
  }
}
