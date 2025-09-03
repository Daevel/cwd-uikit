import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cwd-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loader" [ngClass]="[mode(), color(), striped() ? 'striped' : '']">
      @if(mode() === 'determinate') {
        <div class="bar" [style.width.%]="value()"></div>
        @if(showValue()) {
          <span class="value-label">{{ value() }}%</span>
        }
      }
      @else if(mode() === 'indeterminate') {
        <div class="bar-indeterminate"></div>
      }
    </div>
  `,
  styleUrls: ['./cwd-loader.component.scss']
})
export class CwdLoaderComponent {
  mode = input<'indeterminate' | 'determinate'>('indeterminate');
  value = input<number>(0);
  color = input<'primary' | 'secondary' | 'warn' | 'danger'>('primary');
  striped = input(false);
  showValue = input(false);
}
