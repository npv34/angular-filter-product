import {Component, OnInit, OnChanges, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit, OnChanges {
  @Input() rating: number;
  @Output() ratingClicked = new EventEmitter<string>();
  starWidth: number;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
  this.starWidth = this.rating * 75 / 5;
  }

  onClick() {
    this.ratingClicked.emit('The rating' + this.rating + 'clicked!');
  }

}
