import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cwd-loader',
  imports: [NgClass],
  template: `
    <div class="loader" [ngClass]="mode">
      @if(mode === 'determinate') {
        <div class="bar" [style.width.%]="value"></div>
      }
      @else if (mode === 'indeterminate') {
        <div class="bar-indeterminate"></div>
      }  
    </div>
  `,
  styleUrl: './cwd-loader.component.scss'
})
export class CwdLoaderComponent {

  @Input() mode: 'indeterminate' | 'determinate' = 'indeterminate';
  @Input() value: number = 0;

}
