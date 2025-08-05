import { BreakpointObserver } from '@angular/cdk/layout';
import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { BREAKPOINTS, BreakpointKey } from '../../types/cwd-flexbox-types'; // percorso personalizzabile

@Directive({
  selector: '[cwdFlex]',
  standalone: true,
})
export class CwdFlexboxDirective implements OnInit, OnDestroy {
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);
  private observer = inject(BreakpointObserver);
  private sub = new Subscription();

  @Input() cwdFlexDirection = 'row';
  @Input() cwdFlexAlign = 'stretch';
  @Input() cwdFlexJustify = 'flex-start';
  @Input() cwdFlexGap = '0';
  @Input() cwdFlexWrap = 'nowrap';

  // Responsive inputs
  @Input() cwdFlexDirectionXs?: string;
  @Input() cwdFlexDirectionSm?: string;
  @Input() cwdFlexDirectionMd?: string;
  @Input() cwdFlexDirectionLg?: string;
  @Input() cwdFlexDirectionXl?: string;

  @Input() cwdFlexGapXs?: string;
  @Input() cwdFlexGapSm?: string;
  @Input() cwdFlexGapMd?: string;
  @Input() cwdFlexGapLg?: string;
  @Input() cwdFlexGapXl?: string;

  ngOnInit() {
    this.applyStyles(); // iniziale
    this.sub.add(
      this.observer.observe(Object.values(BREAKPOINTS)).subscribe((state) => {
        for (const bp of Object.keys(BREAKPOINTS) as BreakpointKey[]) {
          if (state.breakpoints[BREAKPOINTS[bp]]) {
            this.applyResponsive(bp);
            break;
          }
        }
      })
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private getResponsiveValue<T>(
  instance: Record<string, any>,
  base: string,
  bp: BreakpointKey
): T | undefined {
  const capitalized = bp.charAt(0).toUpperCase() + bp.slice(1);
  const propName = `${base}${capitalized}`;
  return instance[propName] as T | undefined;
}


  private applyResponsive(bp: BreakpointKey) {
    const direction = this.getResponsiveValue<string>(this, 'cwdFlexDirection', bp);
    const gap = this.getResponsiveValue<string>(this, 'cwdFlexGap', bp);

    if (direction) this.cwdFlexDirection = direction;
    if (gap != null) this.cwdFlexGap = gap;

    this.applyStyles();
  }

  private applyStyles() {
    const native = this.el.nativeElement;
    this.renderer.setStyle(native, 'display', 'flex');
    this.renderer.setStyle(native, 'flex-direction', this.cwdFlexDirection);
    this.renderer.setStyle(native, 'align-items', this.cwdFlexAlign);
    this.renderer.setStyle(native, 'justify-content', this.cwdFlexJustify);
    this.renderer.setStyle(native, 'gap', `${this.cwdFlexGap}px`);
    this.renderer.setStyle(native, 'flex-wrap', this.cwdFlexWrap);
  }
}
