import { Input, ElementRef } from "@angular/core";

export abstract class BaseSlideComponent {
  @Input() abstract slides: any[];

  slidesOpts: any = {
    initialSlide: 1,
    speed: 400
  };

  setHeight() {
    // this.el.nativeElement.style({
    //   height: "100vh"
    // });
  }

  constructor() {}
}
