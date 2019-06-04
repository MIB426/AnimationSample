import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-no-animation',
  templateUrl: './no-animation.component.html',
  styleUrls: ['./no-animation.component.css']
})
export class NoAnimationComponent implements OnInit, OnChanges {
  visibility = 'shown';
  @Input() isVisible = true;
  constructor() { }

  ngOnInit() {
  }




  ngOnChanges() {
     this.visibility = this.isVisible ? 'shown' : 'hidden';
  }
}
