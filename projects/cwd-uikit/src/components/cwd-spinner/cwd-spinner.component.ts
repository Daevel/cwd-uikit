import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cwd-spinner',
  imports: [NgClass],
  template: `
  <svg viewBox="25 25 50 50" class="container" [ngClass]="size">
  <circle
    [attr.cx]="cx"
    [attr.cy]="cy"
    [attr.r]="r"
    class="loader"
    [ngClass]="color">
  </circle>
</svg>

  `,
  standalone: true,
  styleUrl: './cwd-spinner.component.scss'
})
export class CwdSpinnerComponent {

  @Input() cx: string = '50';
  @Input() cy: string = '50';
  @Input() r: string = '20';
  @Input() color: 'primary' | 'accent' | 'warn' | 'surface' | 'text' | 'muted' = 'primary';
  @Input() size: 'small' | 'medium' | 'big' = 'medium';

}
