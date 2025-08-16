import { ApplicationRef, ComponentRef, EnvironmentInjector, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { CwdSpinnerComponent } from '../public-api';
import { CwdToastService } from './cwd-toast.service';

@Injectable({ providedIn: 'root' })
export class CwdSpinnerService {

  private spinnerRef?: ComponentRef<CwdSpinnerComponent>;
  private overlayElem?: HTMLElement;
  private timeoutId?: any;
  private renderer: Renderer2;

  constructor(
    private appRef: ApplicationRef,
    private injector: EnvironmentInjector,
    private toastService: CwdToastService,
    rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  showSpinner() {
    if (this.spinnerRef) return;

    // crea overlay
    this.overlayElem = this.renderer.createElement('div');
    this.renderer.setStyle(this.overlayElem, 'position', 'fixed');
    this.renderer.setStyle(this.overlayElem, 'top', '0');
    this.renderer.setStyle(this.overlayElem, 'left', '0');
    this.renderer.setStyle(this.overlayElem, 'width', '100vw');
    this.renderer.setStyle(this.overlayElem, 'height', '100vh');
    this.renderer.setStyle(this.overlayElem, 'display', 'flex');
    this.renderer.setStyle(this.overlayElem, 'align-items', 'center');
    this.renderer.setStyle(this.overlayElem, 'justify-content', 'center');
    this.renderer.setStyle(this.overlayElem, 'background', 'rgba(255,255,255,0.3)');
    this.renderer.setStyle(this.overlayElem, 'backdrop-filter', 'blur(5px)');
    this.renderer.setStyle(this.overlayElem, 'z-index', '9999');
    this.renderer.setStyle(this.overlayElem, 'pointer-events', 'all');

    if (this.overlayElem) {
      document.body.appendChild(this.overlayElem);
    }

    // bootstrap spinner dentro overlay
    this.spinnerRef = this.appRef.bootstrap(CwdSpinnerComponent, this.overlayElem);

    // timeout automatico 30s
    this.timeoutId = setTimeout(() => {
      this.hideSpinner();
      this.toastService.toastError("L'operazione ci ha impiegato troppo tempo, riprovare.", 'Errore caricamento', 'bottom-left');
    }, 30000);
  }

  hideSpinner() {
    if (!this.spinnerRef) return;

    this.appRef.detachView(this.spinnerRef.hostView);
    this.spinnerRef.destroy();
    this.spinnerRef = undefined;

    if (this.overlayElem) {
      this.overlayElem.remove();
      this.overlayElem = undefined;
    }

    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = undefined;
    }
  }
}
