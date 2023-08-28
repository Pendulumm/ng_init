import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-myc01-counter',
  templateUrl: './myc01-counter.component.html',
  styleUrls: ['./myc01-counter.component.css']
})
export class Myc01CounterComponent {
  counter = 0;
  expression = "counter";
  // imgUrl = '../assets/1.jpg';
  imgUrl = '1.jpg';

  add_() {
    this.counter++;
  }
  minus_() {
    this.counter--;
  }
}
