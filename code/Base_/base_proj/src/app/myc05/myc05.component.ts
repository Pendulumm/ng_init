import { Component } from '@angular/core';

@Component({
  selector: 'app-myc05',
  templateUrl: './myc05.component.html',
  styleUrls: ['./myc05.component.css']
})
export class Myc05Component {
  // MVVM: Model 模型数据
  // 
  uname = 'ding ding';
  age = 20;

  printUname(event: Event) {
    console.log(this);
    console.log(event);
  }
  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
