import { Component, Input } from '@angular/core';

@Component({
  selector: 'cwd-flexbox',
  template: `<ng-content></ng-content>`,
  host: {
    '[style.display]': `'flex'`,
    '[style.flex-direction]': 'direction',
    '[style.align-items]': 'align',
    '[style.justify-content]': 'justify',
    '[style.flex-wrap]': 'wrap',
    '[style.gap]': 'gap + "px"',
  },
  standalone: true,
})
export class CwdFlexboxComponent {
  @Input() direction: string = 'row';
  @Input() align: string = 'stretch';
  @Input() justify: string = 'flex-start';
  @Input() gap: string = '0';
  @Input() wrap: string = 'nowrap';
}
