import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CwdCardComponent, CwdButtonComponent} from 'cwd-uikit';
import { ROUTE_PATHS } from '../../../@core/const';

@Component({
  selector: 'app-showcase',
  imports: [CwdCardComponent, CwdButtonComponent],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.scss'
})
export class ShowcaseComponent {

  constructor(private router: Router) {
  }

  public redirectToGettingStartedPage() {
    this.router.navigate([`/${ROUTE_PATHS.GETTING_STARTED}`]);
  }
}
