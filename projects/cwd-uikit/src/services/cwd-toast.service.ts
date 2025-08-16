import { ApplicationRef, ComponentRef, EnvironmentInjector, Injectable, Injector, createComponent } from '@angular/core';
import { CwdToastComponent } from '../components/cwd-toast/cwd-toast.component';
import { CwdToastPosition, CwdToastType } from '../types/cwd-toast-types';
import { TOAST_SUCCESS_NOTIFICATION_WAV, TOAST_INFO_NOTIFICATION_WAV, TOAST_ERROR_NOTIFICATION_MP3 } from '../types/audio-const-base64';


@Injectable({
  providedIn: 'root'
})
export class CwdToastService {

  private toastRef?: ComponentRef<CwdToastComponent>;
  private toasts: ComponentRef<CwdToastComponent>[] = [];

  constructor(private appRef: ApplicationRef, private injector: EnvironmentInjector) { }

  public toast(message: string, label: string, type: CwdToastType = 'info', position: CwdToastPosition = 'bottom-left', delayTime?: number) {
    this.showToast(message, label, type, position, delayTime);
  }

  public toastSuccess(message: string, label: string, position: CwdToastPosition, delayTime?: number) {
    this.showToast(message, label, 'success', position, delayTime);
  }

  public toastError(message: string, label: string, position: CwdToastPosition, delayTime?: number) {
    this.showToast(message, label, 'error', position, delayTime);
  }

  private showToast(message: string, label: string, type: CwdToastType, position: CwdToastPosition, delayTime?: number) {
    const timeout = delayTime ?? 3000;

    // Riproduci il suono in base al tipo di toast
    this.playSound(type);

    // Rimuovi eventuale toast precedente
    if (this.toastRef) {
      this.appRef.detachView(this.toastRef.hostView);
      this.toastRef.destroy();
    }

    // Crea il componente toast dinamicamente
    this.toastRef = createComponent(CwdToastComponent, {
      environmentInjector: this.injector
    });
    this.toastRef.instance.visible.set(true);
    this.toastRef.instance.message = message;
    this.toastRef.instance.label = label;
    this.toastRef.instance.type = type;
    this.toastRef.instance.position = position;

    // Aggiungi al DOM
    this.appRef.attachView(this.toastRef.hostView);
    document.body.appendChild(this.toastRef.location.nativeElement);

    // Auto-hide dopo 3 secondi
    setTimeout(() => {
      this.toastRef?.instance.close();
      setTimeout(() => {
        this.appRef.detachView(this.toastRef!.hostView);
        this.toastRef!.destroy();
        this.toasts = this.toasts.filter(t => t !== this.toastRef);
      }, 300);
    }, timeout);
  }

  private playSound(type: CwdToastType) {
    let audioSrc: string;

    switch (type) {
      case 'success':
        audioSrc = TOAST_SUCCESS_NOTIFICATION_WAV;
        break;
      case 'info':
        audioSrc = TOAST_INFO_NOTIFICATION_WAV;
        break;
      case 'error':
        audioSrc = TOAST_ERROR_NOTIFICATION_MP3;
        break;
      default:
        return;
    }

    const audio = new Audio(audioSrc);
    audio.volume = 0.3;
    audio.play().catch(err => console.warn('Errore riproduzione audio toast:', err));
  }
}
