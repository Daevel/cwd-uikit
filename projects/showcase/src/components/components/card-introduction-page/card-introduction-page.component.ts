import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CwdCardComponent, CwdButtonComponent } from 'cwd-uikit';

@Component({
  selector: 'app-card-introduction-page',
  imports: [CommonModule, CwdCardComponent, CwdButtonComponent],
  templateUrl: './card-introduction-page.component.html',
  styleUrl: './card-introduction-page.component.scss'
})
export class CardIntroductionPageComponent {

}
