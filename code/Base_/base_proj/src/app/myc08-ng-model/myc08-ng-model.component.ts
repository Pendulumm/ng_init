import { Component } from '@angular/core';

@Component({
  selector: 'app-myc08-ng-model',
  templateUrl: './myc08-ng-model.component.html',
  styleUrls: ['./myc08-ng-model.component.css']
})
export class Myc08NgModelComponent {
  // Model
  uname = 'tom';

  changeHandler() {
    console.log(this.uname);
  }
}
