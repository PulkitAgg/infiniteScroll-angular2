import { Component } from '@angular/core';
import { InfiniteScroll } from 'angular2-infinite-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  array = [];
  sum = 100;
  finishScroll = false;

  constructor() {
    this.addNumbers(0, this.sum);
  }

  addNumbers(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex; ++i) {
      if (i == 180) {
        this.finishScroll = true;
      }
      this.array.push(i);
    }
  }
  onScrollDown() {
    console.log('scrolled!!');
    // Add next 20 numbers.
    let start = this.sum;
    this.sum += 20;
    this.addNumbers(start, this.sum);
  }
}
