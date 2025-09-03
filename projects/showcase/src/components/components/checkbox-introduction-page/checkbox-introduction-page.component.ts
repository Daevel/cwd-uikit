import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CwdCheckboxComponent } from 'cwd-uikit';

@Component({
  selector: 'app-checkbox-introduction-page',
  imports: [CommonModule, CwdCheckboxComponent],
  templateUrl: './checkbox-introduction-page.component.html',
  styleUrl: './checkbox-introduction-page.component.scss'
})
export class CheckboxIntroductionPageComponent {

}
