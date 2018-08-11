import { Component, ElementRef, EventEmitter, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'maple-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @ViewChild('popin') popin: ElementRef;
  @Output() exit = new EventEmitter<void>();

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) { }

  ngOnInit() {
    this.listenExitPopin();
  }

  listenExitPopin(): void {
    this.renderer.listen(this.popin.nativeElement, 'click', e => e.stopPropagation());
    this.renderer.listen(this.elementRef.nativeElement, 'click', () => this.exit.next());
    this.renderer.listen(document, 'keyup.Escape', () => this.exit.next());
  }
}
