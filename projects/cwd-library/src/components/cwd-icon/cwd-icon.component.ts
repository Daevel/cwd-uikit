import { NgIf } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';

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
      // Costruisce il nome della proprietà, es: 'faCoffee'
      const iconKey = 'fa' + this.iconName.charAt(0).toUpperCase() + this.iconName.slice(1);
      const iconCandidate = (solidIcons as any)[iconKey];
      // Verifica che sia una vera icona FontAwesome
      if (iconCandidate && iconCandidate.iconName) {
        this.icon = iconCandidate;
      } else {
        this.icon = undefined;
      }
      console.log('Icona richiesta:', iconKey, this.icon);
    }
  }
}
