import { Directive, HostListener, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appData]'
})
export class DataDirective {

  @Input()
  private data: Date;
  private paragraf; // <p>

  constructor(private el: ElementRef, private render: Renderer2) {
    this.paragraf = this.render.createElement('p');
  }

  @HostListener('mouseenter') // dziala gdy najedziemy
  mouseenter(event: Date) {
    // console.log(this.data);
    this.paragraf.innerHTML = this.data.toLocaleDateString();
    this.render.appendChild(this.el.nativeElement, this.paragraf); // this.el.nativeElement - to jest <li>
  }

  @HostListener('mouseleave') // dziala gdy uciekamy
  mouseleave(event: Date) {
    //  console.log(this.data);
    this.render.removeChild(this.el.nativeElement, this.paragraf);


  }
}
