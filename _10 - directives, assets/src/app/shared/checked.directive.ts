import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appChecked]'
})
export class CheckedDirective implements OnInit {

  constructor(private el: ElementRef, private render: Renderer2) { }

  ngOnInit(): void {
    const li = this.el.nativeElement;
    this.render.setStyle(li, 'list-style-image', 'url(/assets/checked.png)');
    this.render.setStyle(li, 'background', 'lightblue');

  }



}
