import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CwdCardComponent, CwdButtonComponent, CwdToolbarComponent} from 'cwd-uikit';
import { EXTERNAL_LINKS, ROUTE_PATHS } from '../../../@core/const';

@Component({
  selector: 'app-showcase',
  imports: [CwdCardComponent, CwdButtonComponent, CwdToolbarComponent],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.scss'
})
export class ShowcaseComponent {

  constructor(private router: Router) {
  }

  public redirectToShowcasePage() {
    this.router.navigate([`/${ROUTE_PATHS.SHOWCASE}`]);
  }

  public redirectToGettingStartedPage() {
    this.router.navigate([`/${ROUTE_PATHS.GETTING_STARTED}`]);
  }

  public redirectToComponentPages() {
    this.router.navigate([`/${ROUTE_PATHS.COMPONENTS}`]);
  }

  public redirectToGuidesPage() {
    this.router.navigate([`/${ROUTE_PATHS.GUIDES}`]);
  }

  public redirectOnGitHubPage() {
    window.open(EXTERNAL_LINKS.GITHUB, '_blank');
  }
}
