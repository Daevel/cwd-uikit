import { Component } from '@angular/core';
import { CwdCardComponent, CwdButtonComponent, CwdInputComponent, CwdIconComponent, CwdToastService, CwdFabComponent } from 'cwd-library';

@Component({
  selector: 'app-showcase',
  imports: [CwdCardComponent,CwdButtonComponent,CwdInputComponent,CwdIconComponent,CwdFabComponent],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.scss'
})
export class ShowcaseComponent {

  public testoDiProva: string = "";

  constructor(private toastService: CwdToastService) {
  }

  handleResponse() {
    this.testoDiProva = "prova";
  }

  mostraPopup() {
    this.toastService.toastSuccess("Operazione riuscita");
  }

  onCloseClick() {
    this.testoDiProva = "";
  }

}
