import { NgIf } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons';

const ICONS_MAP: { [key: string]: IconProp } = {
  coffee: faCoffee,
  user: faUser,
  // aggiungi qui altre icone che vuoi supportare
};

@Component({
  selector: 'cwd-icon',
  standalone: true,
  imports: [FontAwesomeModule,NgIf],
  template: `<fa-icon *ngIf="icon" [icon]="icon!"></fa-icon>`,
  styleUrls: ['./cwd-icon.component.scss']
})
export class CwdIconComponent implements OnChanges {
  @Input() iconName?: string;
  icon?: IconProp;

  ngOnChanges(): void {
    if (this.iconName) {
      this.icon = ICONS_MAP[this.iconName] ?? undefined;
      console.log('Icona richiesta:', this.iconName, this.icon);
    }
  }
}
