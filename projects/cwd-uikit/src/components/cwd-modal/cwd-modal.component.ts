import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { CwdFabComponent } from '../cwd-fab/cwd-fab.component';
import { CwdTooltipDirective } from '../../directives/cwd-tooltip.directive';

@Component({
  selector: 'cwd-modal',
  imports: [CommonModule, CwdFabComponent, CwdTooltipDirective],
  templateUrl: './cwd-modal.component.html',
  styleUrl: './cwd-modal.component.scss'
})
export class CwdModalComponent {

  close = output<void>();
}
