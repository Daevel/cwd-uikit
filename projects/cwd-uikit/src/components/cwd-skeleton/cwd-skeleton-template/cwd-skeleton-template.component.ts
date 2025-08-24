import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CwdSkeletonComponent } from '../cwd-skeleton.component';

@Component({
  selector: 'cwd-skeleton-template',
  imports: [CommonModule, CwdSkeletonComponent],
  templateUrl: './cwd-skeleton-template.component.html',
  styleUrl: './cwd-skeleton-template.component.scss'
})
export class CwdSkeletonTemplateComponent {

  @Input() type: 'card' | 'list' = 'card';


}
