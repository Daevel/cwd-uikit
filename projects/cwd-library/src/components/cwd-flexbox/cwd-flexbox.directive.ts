import { Directive, Input, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: '[cwdFlex]',
  standalone: true,
})
export class CwdFlexboxDirective {
  @Input() cwdFlexDirection: string = 'row';
  @Input() cwdFlexAlign: string = 'stretch';
  @Input() cwdFlexJustify: string = 'flex-start';
  @Input() cwdFlexGap: string = '0';
  @Input() cwdFlexWrap: string = 'nowrap';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'display', 'flex');
    this.renderer.setStyle(this.el.nativeElement, 'flex-direction', this.cwdFlexDirection);
    this.renderer.setStyle(this.el.nativeElement, 'align-items', this.cwdFlexAlign);
    this.renderer.setStyle(this.el.nativeElement, 'justify-content', this.cwdFlexJustify);
    this.renderer.setStyle(this.el.nativeElement, 'gap', `${this.cwdFlexGap}px`);
    this.renderer.setStyle(this.el.nativeElement, 'flex-wrap', this.cwdFlexWrap);
  }
}
