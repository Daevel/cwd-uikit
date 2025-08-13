import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CwdButtonComponent } from 'cwd-uikit';

@Component({
  selector: 'app-exposing-card',
  imports: [CommonModule, CwdButtonComponent],
  templateUrl: './exposing-card.component.html',
  styleUrl: './exposing-card.component.scss'
})
export class ExposingCardComponent {
  @Input() imageSrc: string = '';           // immagine di anteprima
  @Input() ctaText: string = '';            // testo della call-to-action
  @Input() ctaIcon: string = ''; 
  @Input() ctaClick?: () => void;
}
