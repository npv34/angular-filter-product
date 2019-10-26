import {Component, Input, OnInit, OnChanges, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit, OnChanges {
  starWidth = 4;
  @Input() rating: number;
  @Output() clickStar = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    console.log(this.rating);
  }
  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }
  click() {
    this.clickStar.emit('Clicked  star ' + this.rating);
  }

}
