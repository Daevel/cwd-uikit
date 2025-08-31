import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CwdButtonComponent } from 'cwd-uikit';

@Component({
  selector: 'app-button-introduction-page',
  imports: [CommonModule, CwdButtonComponent],
  templateUrl: './button-introduction-page.component.html',
  styleUrl: './button-introduction-page.component.scss'
})
export class ButtonIntroductionPageComponent {

}
