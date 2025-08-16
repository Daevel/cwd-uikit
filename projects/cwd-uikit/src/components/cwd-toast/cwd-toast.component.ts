import { NgClass } from '@angular/common';
import { Component, Input, signal, WritableSignal } from '@angular/core';
import { CwdFabComponent } from '../cwd-fab/cwd-fab.component';
import { CwdToastPosition, CwdToastType } from '../../types/cwd-toast-types';
import { CwdIconComponent } from '../../components/cwd-icon/cwd-icon.component';

@Component({
  selector: 'cwd-toast',
  imports: [NgClass, CwdFabComponent, CwdIconComponent],
  template: `
  <div class="cwd-toast" [ngClass]="toastClasses">
  <div class="headbar">
    <div class="headbar-left">
      <cwd-icon [iconName]="iconBySeverity"></cwd-icon>
      <span class="label">{{label}}</span>
    </div>
    <div class="headbar-right">
      <cwd-fab size="small" iconName="faXmark" (fabClick)="close()"></cwd-fab>
    </div>
  </div>
  <div class="body">
    {{ message }}
  </div>
</div>
  `,
  styleUrl: './cwd-toast.component.scss',
  standalone: true
})
export class CwdToastComponent {
  @Input() type: CwdToastType = 'info';
  @Input() label: string = '';
  @Input() position: CwdToastPosition = 'bottom-left';
  @Input() message = '';

  visible: WritableSignal<boolean> = signal(true);

  close() {
    this.visible.set(false);
  }

  get toastClasses() {
    const positionClass = this.position;
    const animationClass = this.getAnimationClass(this.position);
    return {
      [positionClass]: true,
      [animationClass]: true,
      hide: !this.visible()
    };
  }

  get iconBySeverity(): string {
    switch (this.type) {
      case 'info':
        return 'faCircleInfo';
      case 'success':
        return 'faCheck';
      case 'error':
        return 'faX';
      default:
        return '';
    }
  }

  private getAnimationClass(position: CwdToastPosition): string {
    switch (position) {
      case 'top-left':
        return 'slide-in-top-left';
      case 'top-center':
        return 'slide-in-top';
      case 'top-right':
        return 'slide-in-top-right';
      case 'mid-left':
        return 'slide-in-left';
      case 'center':
        return 'fade-in';
      case 'mid-right':
        return 'slide-in-right';
      case 'bottom-left':
        return 'slide-in-bottom-left';
      case 'bottom-center':
        return 'slide-in-bottom';
      case 'bottom-right':
        return 'slide-in-bottom-right';
      default:
        return 'fade-in';
    }
  }

}
