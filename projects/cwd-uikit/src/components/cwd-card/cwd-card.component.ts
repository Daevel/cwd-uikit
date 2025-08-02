import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'cwd-card',
  templateUrl: './cwd-card.component.html',
  styleUrls: ['./cwd-card.component.scss'],
  imports: [CommonModule],
  host: {
    'class': 'cwd-card',
    'role': 'region',
    '[attr.aria-labelledby]': 'ariaLabelledBy'
  },
  standalone: true
})
export class CwdCardComponent {
  @Input() variant?: 'elevated' | 'outlined' = 'elevated';
  @Input() ariaLabelledBy?: string;
  @Input() color: 'primary' | 'secondary' | 'warn' | 'default' = 'default';
  @Input() size: 'small' | 'medium' | 'big' = 'medium';

  get hostClasses(): string[] {
    return [
      `cwd-card--${this.color}`,
      `cwd-card--${this.size}`
    ];
  }

  @HostBinding('class')
  get classes(): string {
    return this.hostClasses.join(' ');
  }
}
