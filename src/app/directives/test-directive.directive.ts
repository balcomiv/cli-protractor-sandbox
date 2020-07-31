import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[appTestDirective]',
})
export class TestDirectiveDirective implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log(`OnInit - ${this.constructor.name}`);
  }
}
