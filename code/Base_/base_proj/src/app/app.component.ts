import { Component } from '@angular/core';

import { MyC03 } from './myC03/myC03.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [1, 2, 3];
  title = 'test';
}
