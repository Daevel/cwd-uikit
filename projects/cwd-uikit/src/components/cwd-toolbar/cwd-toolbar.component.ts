import { Component, HostListener } from '@angular/core';
import { CwdFabComponent } from '../cwd-fab/cwd-fab.component';

@Component({
  selector: 'cwd-toolbar',
  imports: [CwdFabComponent],
  templateUrl: './cwd-toolbar.component.html',
  styleUrl: './cwd-toolbar.component.scss'
})
export class CwdToolbarComponent {
  isFixed = false;

  private triggerHeight = 200;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isFixed = window.scrollY > this.triggerHeight;
  }
}
