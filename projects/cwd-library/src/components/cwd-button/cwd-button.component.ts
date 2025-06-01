import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { CwdIconComponent } from '../cwd-icon/cwd-icon.component';


@Component({
  selector: 'cwd-button',
  imports: [FontAwesomeModule, CwdIconComponent],
  templateUrl: './cwd-button.component.html',
  styleUrl: './cwd-button.component.scss',
  standalone: true
})
export class CwdButtonComponent {

  @Input() iconName?: string;

  @Output() click = new EventEmitter<MouseEvent>();

  public onClick(event: MouseEvent) {
    this.click.emit(event);
  }




}
