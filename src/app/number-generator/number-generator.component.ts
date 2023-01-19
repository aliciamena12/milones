import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-number-generator',
  templateUrl: './number-generator.component.html',
  styleUrls: ['./number-generator.component.scss'],
  // animations: [
  //   trigger('numberChange', [
  //     transition(':enter', [
  //       style({ opacity: 0 }),
  //       animate('100ms', style({ opacity: 1 })),
  //     ]),
  //     transition(':change', [
  //       animate('1000ms', style({ opacity: 0 }))
  //     ])
  //   ]),
  // ]
})
export class NumberGeneratorComponent implements OnInit {

  public selectedNumber: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  onAnimationEvent(event: AnimationEvent) {
  }

  public switchNumber() {
    
    console.log(this.selectedNumber);
    this.selectedNumber = Math.floor((Math.random() * 6)  + 1);

  }

}
