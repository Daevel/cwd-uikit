import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CwdButtonComponent, CwdInputComponent } from 'cwd-library';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CwdButtonComponent, CwdInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-test';
}
