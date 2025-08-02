import { Component } from '@angular/core';
import { CwdCardComponent } from '../../cwd-card/cwd-card.component';


@Component({
  selector: 'cwd-card-test',
  imports: [CwdCardComponent],
  template: `
    <cwd-card>
      <div card-header>Header</div>
      <div card-body>Body</div>
      <div card-footer>Footer</div>
    </cwd-card>
  `,
  styleUrl: './card-test.component.css'
})
export class CardTestComponent {}
