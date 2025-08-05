import { ApplicationRef, ComponentRef, Injectable, Injector, createComponent } from '@angular/core';
import { CwdToastComponent } from '../components/cwd-toast/cwd-toast.component';

@Injectable({
  providedIn: 'root'
})
export class CwdToastService {

  private toastRef?: ComponentRef<CwdToastComponent>;

  constructor(private appRef: ApplicationRef, private injector: Injector) { }

  toastSuccess(message: string) {
    this.showToast(message);
  }

  private showToast(message: string) {
    // Rimuovi eventuale toast precedente
    if (this.toastRef) {
      this.appRef.detachView(this.toastRef.hostView);
      this.toastRef.destroy();
    }

    // Crea il componente toast dinamicamente
    this.toastRef = createComponent(CwdToastComponent, {
      environmentInjector: this.appRef.injector
    });
    this.toastRef.instance.visible = true;
    this.toastRef.instance.message = message; // <-- usa l'input, non innerHTML

    // Aggiungi al DOM
    this.appRef.attachView(this.toastRef.hostView);
    document.body.appendChild(this.toastRef.location.nativeElement);

    // Auto-hide dopo 3 secondi
    setTimeout(() => {
      this.toastRef?.instance.close();
      setTimeout(() => {
        if (this.toastRef) {
          this.appRef.detachView(this.toastRef.hostView);
          this.toastRef.destroy();
          this.toastRef = undefined;
        }
      }, 300);
    }, 3000);
  }
}
