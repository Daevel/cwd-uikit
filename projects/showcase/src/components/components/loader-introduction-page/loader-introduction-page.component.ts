import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CwdLoaderComponent } from 'cwd-uikit';

@Component({
  selector: 'app-loader-introduction-page',
  imports: [CommonModule, CwdLoaderComponent],
  templateUrl: './loader-introduction-page.component.html',
  styleUrl: './loader-introduction-page.component.scss'
})
export class LoaderIntroductionPageComponent {

}
