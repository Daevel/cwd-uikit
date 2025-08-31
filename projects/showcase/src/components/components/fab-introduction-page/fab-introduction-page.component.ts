import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CwdFabComponent } from 'cwd-uikit';

@Component({
  selector: 'app-fab-introduction-page',
  imports: [CommonModule, CwdFabComponent],
  templateUrl: './fab-introduction-page.component.html',
  styleUrl: './fab-introduction-page.component.scss'
})
export class FabIntroductionPageComponent {

}
