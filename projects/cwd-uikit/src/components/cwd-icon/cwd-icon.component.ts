import { Component, Input, OnChanges } from '@angular/core';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';
import { icons } from '../../public-api';

@Component({
  selector: 'cwd-icon',
  standalone: true,
  imports: [FontAwesomeModule],
  template: `
  @if (iconDef) {
    <fa-icon [icon]="iconDef"></fa-icon>
  }
  `
})
export class CwdIconComponent implements OnChanges {
  @Input() iconName?: string;

  iconDef?: IconDefinition;

  ngOnChanges() {
    if (this.iconName) {
      this.iconDef = (icons.fas as any)[this.iconName] || (icons.fab as any)[this.iconName];
    }
  }

}
