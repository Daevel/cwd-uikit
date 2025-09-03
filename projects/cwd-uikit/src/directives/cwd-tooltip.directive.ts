import { Directive, ElementRef, Renderer2, HostListener, OnDestroy, input } from '@angular/core';

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

@Directive({
  selector: '[cwdTooltip]',
  standalone: true
})
export class CwdTooltipDirective implements OnDestroy {

  // Input Signals moderni
  cwdTooltip = input<string>();
  tooltipPosition = input<TooltipPosition>('top');

  private tooltipEl: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    if (!this.tooltipEl) this.createTooltip();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hideTooltip();
  }

  private createTooltip() {
    this.tooltipEl = this.renderer.createElement('span');
    this.renderer.addClass(this.tooltipEl, 'cwd-tooltip-bubble');
    this.renderer.addClass(this.tooltipEl, `cwd-tooltip-${this.tooltipPosition()}`);
    this.renderer.setProperty(this.tooltipEl, 'innerText', this.cwdTooltip());

    this.renderer.appendChild(document.body, this.tooltipEl);

    // Forza reflow prima di posizionare e mostrare tooltip
    requestAnimationFrame(() => {
      this.setPosition();
      this.renderer.addClass(this.tooltipEl!, 'show');
    });
  }

  private setPosition() {
    if (!this.tooltipEl) return;

    const hostRect = this.el.nativeElement.getBoundingClientRect();
    const tooltipRect = this.tooltipEl.getBoundingClientRect();

    let top = 0;
    let left = 0;
    const pos = this.tooltipPosition();

    switch (pos) {
      case 'top':
        top = hostRect.top + window.scrollY - tooltipRect.height - 8;
        left = hostRect.left + window.scrollX + (hostRect.width - tooltipRect.width) / 2;
        break;

      case 'bottom':
        top = hostRect.bottom + window.scrollY + 8;
        left = hostRect.left + window.scrollX + (hostRect.width - tooltipRect.width) / 2;
        break;

      case 'left':
        top = hostRect.top + window.scrollY + (hostRect.height - tooltipRect.height) / 2;
        left = hostRect.left + window.scrollX - tooltipRect.width - 8;
        break;

      case 'right':
        top = hostRect.top + window.scrollY + (hostRect.height - tooltipRect.height) / 2;
        left = hostRect.right + window.scrollX + 8;
        break;
    }

    this.renderer.setStyle(this.tooltipEl, 'top', `${top}px`);
    this.renderer.setStyle(this.tooltipEl, 'left', `${left}px`);
  }


  private hideTooltip() {
    if (!this.tooltipEl) return;

    this.renderer.removeClass(this.tooltipEl, 'show');

    setTimeout(() => {
      if (this.tooltipEl) {
        this.renderer.removeChild(document.body, this.tooltipEl);
        this.tooltipEl = null;
      }
    }, 200);
  }

  ngOnDestroy() {
    if (this.tooltipEl) {
      this.renderer.removeChild(document.body, this.tooltipEl);
      this.tooltipEl = null;
    }
  }
}
