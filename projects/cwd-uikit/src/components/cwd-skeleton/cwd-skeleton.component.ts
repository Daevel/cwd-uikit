import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'cwd-skeleton',
  imports: [CommonModule],
  template: `
  <div class="cwd-skeleton"
     [ngClass]="[shape, animated ? 'animated' : '']"
     [style.width]="width"
     [style.height]="height">
  </div>
  `,
  styleUrl: './cwd-skeleton.component.scss'
})
export class CwdSkeletonComponent {
  @Input() shape: 'text' | 'circle' | 'rect' | 'rounded' = 'text';
  @Input() width: string = '100%';
  @Input() height: string = '1rem';
  @Input() animated: boolean = true;
}
