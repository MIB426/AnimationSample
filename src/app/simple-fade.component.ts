import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-simple-fade',
  templateUrl: './simple-fade.component.html',
  animations: [
    trigger('visibilityChanged', [
      state('shown' , style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('* => *', animate('.5s'))
    ])
  ],
  styleUrls: ['./simple-fade.component.css']
})
export class SimpleFadeComponent implements OnInit, OnChanges {
  @Input() isSimpleVisible = true;
  visibility = 'shown';
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.visibility = this.isSimpleVisible ? 'shown' : 'hidden';
 }
}
