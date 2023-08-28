import { Injectable } from '@angular/core';


// @Injectable({
//   providedIn: 'root',

// })
@Injectable()
export class TimerService {
  startTime = 0; //记录到的操作开始执行事件
  endTime = 0;  //记录到的操作结束执行事件
  constructor() {
    // console.log('----------------------------------------------------');
    // console.log('TimerService constructor!');
    // console.log('generate new object of TimerService...');
    // console.log('----------------------------------------------------');
  }
  start() {
    this.startTime = new Date().getTime();
  }
  end(opration: string) {
    this.endTime = new Date().getTime();
    console.log(opration + '操作耗时', (this.endTime - this.startTime) + 'ms');
  }
}

// let a:string = 'aaa';
// let b = Array('bbb');
