import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  HostBinding,
  ChangeDetectionStrategy,
  inject
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { BreakpointKey, CwdFlexConfig, BREAKPOINTS } from '../../types/cwd-flexbox-types';

@Component({
  selector: 'cwd-flexbox',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  styles: [`
    :host {
      display: flex;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CwdFlexboxComponent implements OnInit, OnDestroy {
  private breakpointObserver = inject(BreakpointObserver);
  private sub = new Subscription();

  // Inputs (opzionali)
  @Input() direction?: string;
  @Input() align?: string;
  @Input() justify?: string;
  @Input() gap?: string;
  @Input() wrap?: string;

  // Defaults per breakpoint
  private defaultConfig: Record<BreakpointKey, Partial<CwdFlexConfig>> = {
    xs: { direction: 'column', gap: '8', align: 'stretch', justify: 'center', wrap: 'wrap' },
    sm: { direction: 'column', gap: '12' },
    md: { direction: 'row', gap: '16' },
    lg: { direction: 'row', gap: '24' },
    xl: { direction: 'row', gap: '32' },
  };

  // Stili attuali
  private activeStyles: CwdFlexConfig = {
    direction: 'row',
    align: 'stretch',
    justify: 'flex-start',
    gap: '0',
    wrap: 'nowrap'
  };

  @HostBinding('style.display') display = 'flex';
  @HostBinding('style.flex-direction') get flexDirection() { return this.activeStyles.direction; }
  @HostBinding('style.align-items') get alignItems() { return this.activeStyles.align; }
  @HostBinding('style.justify-content') get justifyContent() { return this.activeStyles.justify; }
  @HostBinding('style.flex-wrap') get flexWrap() { return this.activeStyles.wrap; }
  @HostBinding('style.gap') get gapStyle() { return `${this.activeStyles.gap}px`; }

  ngOnInit() {
    this.sub.add(
      this.breakpointObserver
        .observe(Object.values(BREAKPOINTS))
        .subscribe((state) => {
          for (const [key, query] of Object.entries(BREAKPOINTS)) {
            if (state.breakpoints[query]) {
              this.applyDefaults(key as BreakpointKey);
              break;
            }
          }
        })
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private applyDefaults(bp: BreakpointKey) {
    const defaults = this.defaultConfig[bp];

    this.activeStyles = {
      direction: this.direction ?? defaults.direction ?? 'row',
      align: this.align ?? defaults.align ?? 'stretch',
      justify: this.justify ?? defaults.justify ?? 'flex-start',
      gap: this.gap ?? defaults.gap ?? '0',
      wrap: this.wrap ?? defaults.wrap ?? 'nowrap'
    };
  }
}
