import { Component, Input, OnChanges } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgIf } from '@angular/common';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import * as fas from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'cwd-icon',
  standalone: true,
  imports: [FontAwesomeModule, NgIf],
  template: `<fa-icon *ngIf="icon" [icon]="icon"></fa-icon>`,
  styleUrls: ['./cwd-icon.component.scss']
})
export class CwdIconComponent implements OnChanges {
  @Input() iconName?: string;
  icon?: IconProp;

  ngOnChanges(): void {
    if (this.iconName) {
      const iconKey = 'fa' + this.iconName.charAt(0).toUpperCase() + this.iconName.slice(1);
      const iconCandidate = (fas as any)[iconKey];
      if (iconCandidate && iconCandidate.iconName) {
        this.icon = iconCandidate;
      } else {
        console.warn(`Icona "${iconKey}" non trovata.`);
        this.icon = undefined;
      }
    }
  }
}
