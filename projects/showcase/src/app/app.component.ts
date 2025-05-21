import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CwdButtonComponent } from 'cwd-library';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CwdButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'showcase';

  handleResponse() {
    console.log("prova click");
  }

}
