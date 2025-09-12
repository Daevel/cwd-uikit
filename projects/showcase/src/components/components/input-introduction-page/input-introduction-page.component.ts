import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CwdInputComponent, CwdTooltipDirective } from 'cwd-uikit';

@Component({
  selector: 'app-input-introduction-page',
  imports: [CommonModule, CwdInputComponent, CwdTooltipDirective],
  templateUrl: './input-introduction-page.component.html',
  styleUrl: './input-introduction-page.component.scss'
})
export class InputIntroductionPageComponent {

  modelloInput: any;

}
