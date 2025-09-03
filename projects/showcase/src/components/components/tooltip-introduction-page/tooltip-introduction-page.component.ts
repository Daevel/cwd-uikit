import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CwdButtonComponent, CwdFabComponent, CwdTooltipDirective } from 'cwd-uikit';

@Component({
  selector: 'app-tooltip-introduction-page',
  imports: [CommonModule, CwdButtonComponent, CwdTooltipDirective, CwdFabComponent],
  templateUrl: './tooltip-introduction-page.component.html',
  styleUrl: './tooltip-introduction-page.component.scss'
})
export class TooltipIntroductionPageComponent {

}
