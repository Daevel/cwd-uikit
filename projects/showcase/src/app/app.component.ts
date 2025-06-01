import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CwdButtonComponent, CwdCardComponent, CwdIconComponent, CwdInputComponent } from 'cwd-library';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CwdCardComponent,CwdButtonComponent,CwdInputComponent,CwdIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'showcase';

  public testoDiProva: string = "";

  handleResponse() {
    this.testoDiProva = "prova";
  }


}
