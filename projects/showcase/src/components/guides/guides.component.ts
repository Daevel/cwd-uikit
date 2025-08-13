import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CwdButtonComponent, CwdCardComponent, CwdToolbarComponent } from 'cwd-uikit';
import { ROUTE_PATHS, EXTERNAL_LINKS } from '../../../@core/const';

@Component({
  selector: 'app-guides',
  imports: [CwdToolbarComponent, CwdButtonComponent, CwdCardComponent],
  templateUrl: './guides.component.html',
  styleUrl: './guides.component.scss'
})
export class GuidesComponent {

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
