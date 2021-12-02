import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage {

  @ViewChild('animar',{read: ElementRef, static: true}) animar: ElementRef;

  constructor(private animationCtrl:AnimationController) { }

  ngAfterViewInit(){
    const ani01 = this.animationCtrl
  .create()
  .addElement(this.animar.nativeElement)
  .duration(3000)
  .iterations(Infinity)
  .keyframes([
    { offset: 0, background: 'yellow' },
    { offset: 0.72, background: 'var(--background)' },
    { offset: 1, background: 'white' }
  ]);
  ani01.play();
  }

}
