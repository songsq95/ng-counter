import { Component, Input, OnInit } from '@angular/core';
import { Counter } from '../models/counter.model';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() counter: Counter = new Counter(0);
  constructor() { }

  ngOnInit(): void {
  }
  increase(): void{
    this.counter.count++;
  }
  decrease(): void{
    this.counter.count--;
  }
  isLargeOrEqualThanZero(): boolean{
    return this.counter.count >= 0;
  }
  isLessOrEqualThanTen(): boolean{
    return this.counter.count <= 10;
  }
  isLargerThanTen(): boolean{
    return this.counter.count > 10;
  }
  resetZero(): void{
    this.counter.count = 0;
  }
}
