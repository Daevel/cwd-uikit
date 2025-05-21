import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cwd-button',
  imports: [],
  templateUrl: './cwd-button.component.html',
  styleUrl: './cwd-button.component.scss'
})
export class CwdButtonComponent {

  @Output() click = new EventEmitter<MouseEvent>();


  public onClick(event: MouseEvent) {
    this.click.emit(event);
  }


}
