import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-fader',
  templateUrl: './fader.component.html',
  animations: [
    trigger('isVisibleChanged', [
      state('true' , style({ opacity: 1, transform: 'scale(1.0)' })),
      state('false', style({ opacity: 0, transform: 'scale(0.0)'  })),
      transition('1 => 0', animate('300ms')),
      transition('0 => 1', animate('900ms'))
    ])
  ],
  styleUrls: ['./fader.component.css']
})
export class FaderComponent implements OnInit, OnChanges {
  @Input() isVisible: boolean = true;


  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {

   }

}
