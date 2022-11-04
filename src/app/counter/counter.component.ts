import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  count: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  increase(): void{
    this.count++;
  }
  decrease(): void{
    this.count--;
  }
  isLargeOrEqualThanZero(): boolean{
    return this.count >= 0;
  }

}
