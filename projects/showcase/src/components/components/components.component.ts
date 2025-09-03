import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CwdButtonComponent, CwdCardComponent, CwdFlexboxComponent, CwdFlexboxDirective, CwdToolbarComponent } from 'cwd-uikit';
import { ROUTE_PATHS, EXTERNAL_LINKS } from '../../../@core/const';
import { ExposingCardComponent } from '../../ui/exposing-card/exposing-card.component';

@Component({
  selector: 'app-components',
  imports: [CwdToolbarComponent, CwdCardComponent, CwdButtonComponent, ExposingCardComponent, CwdFlexboxComponent, CwdFlexboxDirective],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss'
})
export class ComponentsComponent {

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

  public redirectToButtonIntroductionPage() {
    this.router.navigate([`/${ROUTE_PATHS.COMPONENTS}/button`]);
  }

  public redirectToFabIntroductionPage() {
    this.router.navigate([`/${ROUTE_PATHS.COMPONENTS}/fab`]);
  }

  public redirectToCardIntroductionPage() {
    this.router.navigate([`/${ROUTE_PATHS.COMPONENTS}/card`]);
  }

  public redirectToCheckboxIntroductionPage() {
    this.router.navigate([`/${ROUTE_PATHS.COMPONENTS}/checkbox`]);
  }

  public redirectToLoadingIntroductionPage() {
    this.router.navigate([`/${ROUTE_PATHS.COMPONENTS}/loader`]);
  }

  public redirectToTooltipIntroductionPage() {
    this.router.navigate([`/${ROUTE_PATHS.COMPONENTS}/tooltip`]);
  }

  public redirectOnGitHubPage() {
    window.open(EXTERNAL_LINKS.GITHUB, '_blank');
  }

}
