import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CwdButtonComponent, CwdModalService } from 'cwd-uikit';
import { GettingStartedPageComponent } from '../../getting-started-page/getting-started-page.component';

@Component({
  selector: 'app-modal-introduction-page',
  imports: [CommonModule, CwdButtonComponent],
  templateUrl: './modal-introduction-page.component.html',
  styleUrl: './modal-introduction-page.component.scss'
})
export class ModalIntroductionPageComponent {

  constructor(private modalService: CwdModalService) { }

  openModal() {
  const modalRef = this.modalService.open(GettingStartedPageComponent, {
    data: { prova: 'ciao' }
  });

  // Accedi all'istanza del componente
  console.log(modalRef.componentInstance);

  // Quando il modal viene chiuso
  modalRef.afterClosed().then(result => {
    console.log('Modal chiuso con:', result);
  });
}




}