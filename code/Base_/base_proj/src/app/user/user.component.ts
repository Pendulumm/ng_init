import { Component } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  // opration = '';
  // timerServ: TimerService;
  // constructor(timer: TimerService) {
  //   // console.log(timer);
  //   this.timerServ = timer;

  // }
  // login() {
  //   console.log('--------------------------');
  //   console.log('initialized object of TimerService');
  //   console.log(this.timerServ);
  //   console.log('--------------------------');
  //   this.opration = '登录';
  //   this.timerServ.start();
  //   // let start = new Date().getTime();
  //   console.log('开始向服务器提交登录信息...');
  //   for (let i = 0; i < 800; i++) {
  //     console.log('');

  //   }
  //   console.log('服务器返回相应信息：登录成功！');
  //   // let end = new Date().getTime();
  //   this.timerServ.end(this.opration);

  //   // console.log('登录功能耗时：' + (end - start) +'ms');

  // }
  // register() {
  //   console.log('--------------------------');
  //   console.log('initialized object of TimerService');
  //   console.log(this.timerServ);
  //   console.log('--------------------------');
  //   this.opration = '注册';
  //   this.timerServ.start();
  //   // let start = new Date().getTime();
  //   console.log('开始向服务器提交注册信息...');
  //   for (let i = 0; i < 1300; i++) {
  //     console.log('');

  //   }
  //   console.log('服务器返回相应信息：注册成功！');
  //   // let end = new Date().getTime();
  //   this.timerServ.end(this.opration);

  //   // console.log('注册功能耗时：' + (end - start) + 'ms');
  // }
}
