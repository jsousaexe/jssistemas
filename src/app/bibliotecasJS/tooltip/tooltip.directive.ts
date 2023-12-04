import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[tooltipjs]'
})
export class TooltipDirective {
  @Input('tooltipjs') tooltipText: string = '';
  @Input('tooltipPosition') tooltipPosition: string = 'top';

  private tooltipElement: HTMLElement | null = null;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter(): void {
    if (!this.tooltipElement) {
      this.createTooltipElement();
    }
    this.showTooltip();
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.hideTooltip();
  }

  private createTooltipElement(): void {
    this.tooltipElement = document.createElement('div');
    this.tooltipElement.className = 'custom-tooltip';
    this.tooltipElement.textContent = this.tooltipText;

    document.body.appendChild(this.tooltipElement);
  }

  private showTooltip(): void {
    // adicione [tooltipPosition]='posição' no html
    if (this.tooltipElement ) {
      const { top, left, height, width } = this.el.nativeElement.getBoundingClientRect();
      switch (this.tooltipPosition) {
        case 'top':
          this.tooltipElement.style.top = `${top + window.scrollY - height}px`;
          this.tooltipElement.style.left = `${left + width / 5 + window.scrollX}px`;
          break;
        case 'right':
          this.tooltipElement.style.top = `${top + window.scrollY + height / 5}px`;
          this.tooltipElement.style.left = `${left + width + 5 + window.scrollX}px`;
          break;
        case 'bottom':
          this.tooltipElement.style.top = `${top + window.scrollY + height}px`;
          this.tooltipElement.style.left = `${left + width / 5 + window.scrollX}px`;
          break;
        case 'left':
          this.tooltipElement.style.top = `${top + window.scrollY + height / 5}px`;
          this.tooltipElement.style.left = `${left - width + window.scrollX}px`;
          break;
        default:
          // Lógica padrão ou tratamento de erro
          break;
      }

      this.tooltipElement.style.display = 'block';

    }
  }

  private hideTooltip(): void {
    if (this.tooltipElement) {
      this.tooltipElement.style.display = 'none';
    }
  }
}