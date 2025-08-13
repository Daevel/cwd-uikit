import { Component } from '@angular/core';
import { CwdButtonComponent, CwdToolbarComponent } from '../../../../cwd-uikit/src/public-api';
import { ROUTE_PATHS, EXTERNAL_LINKS } from '../../../@core/const';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getting-started-page',
  imports: [CwdToolbarComponent, CwdButtonComponent],
  templateUrl: './getting-started-page.component.html',
  styleUrl: './getting-started-page.component.scss'
})
export class GettingStartedPageComponent {

  constructor(private router: Router) { }


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
