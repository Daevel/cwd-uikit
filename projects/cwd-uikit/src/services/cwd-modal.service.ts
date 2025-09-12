import {
  ApplicationRef,
  ComponentRef,
  EnvironmentInjector,
  Injectable,
  Type,
  createComponent,
  Injector
} from '@angular/core';
import { CwdModalComponent } from '../components/cwd-modal/public-api';

export interface ModalConfig {
  data?: any;
  disableClose?: boolean;
  width?: string;
  height?: string;
}

export class ModalRef<T = any, R = any> {
  private closed = false;
  private resolveClose!: (value?: R | undefined) => void;
  public afterClosedPromise: Promise<R | undefined>;

  constructor(
    public componentInstance: T,
    private modalComponentRef: ComponentRef<CwdModalComponent>
  ) {
    this.afterClosedPromise = new Promise<R | undefined>((resolve) => {
      this.resolveClose = resolve;
    });

    this.modalComponentRef.instance.close.subscribe((result?: R | any) => {
      this.closed = true;
      this.resolveClose(result);
    });
  }

  close(result?: R) {
    if (!this.closed) {
      this.modalComponentRef.instance.close.emit(result as any);
      this.closed = true;
      this.resolveClose(result);
    }
  }

  afterClosed(): Promise<R | undefined> {
    return this.afterClosedPromise;
  }
}


@Injectable({
  providedIn: 'root'
})
export class CwdModalService {
  private modals: ComponentRef<CwdModalComponent>[] = [];

  constructor(
    private appRef: ApplicationRef,
    private injector: EnvironmentInjector
  ) { }

  open<T extends object, D = any, R = any>(
    componentOrTemplateRef: Type<T>,
    config: ModalConfig = {}
  ): ModalRef<T, R> {
    const modalComponentRef = createComponent(CwdModalComponent, {
      environmentInjector: this.injector
    });

    this.appRef.attachView(modalComponentRef.hostView);
    document.body.appendChild(modalComponentRef.location.nativeElement);

    const contentComponentRef = createComponent(componentOrTemplateRef, {
      environmentInjector: this.injector,
      elementInjector: Injector.create({ providers: [], parent: this.injector })
    });

    if (config.data) {
      contentComponentRef.setInput('data', config.data);
    }

    const modalBody = modalComponentRef.location.nativeElement.querySelector('.cwd-modal-body');
    if (modalBody) {
      modalBody.appendChild(contentComponentRef.location.nativeElement);
    }

    const modalRef = new ModalRef<T, R>(contentComponentRef.instance, modalComponentRef);

    modalComponentRef.instance.close.subscribe(() => {
      this.closeModal(modalComponentRef, contentComponentRef);
    });

    this.modals.push(modalComponentRef);

    return modalRef;
  }

  private closeModal(modalComponentRef: ComponentRef<CwdModalComponent>, contentComponentRef: ComponentRef<any>) {
    this.appRef.detachView(modalComponentRef.hostView);
    contentComponentRef.destroy();
    modalComponentRef.destroy();
    this.modals = this.modals.filter(m => m !== modalComponentRef);
  }

  closeAll(): void {
    this.modals.forEach(modal => {
      this.appRef.detachView(modal.hostView);
      modal.destroy();
    });
    this.modals = [];
  }
}
