import {Component, EventEmitter, OnInit, Output, OnChanges} from '@angular/core';

@Component({
  selector: 'app-input-filter',
  templateUrl: './input-filter.component.html',
  styleUrls: ['./input-filter.component.css']
})
export class InputFilterComponent implements OnInit {
  keyword: string;
  @Output() filterKeyWord = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  getKeyWord(): void {
    this.filterKeyWord.emit(this.keyword);
  }

}
