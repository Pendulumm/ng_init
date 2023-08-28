import { Component } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  providers: [TimerService]   // 仅用于当前组件的服务提供者，它提供的服务对象也只能用在当前组件里
})
export class UserLoginComponent {
  opration = '';
  // timerServ: TimerService;
  constructor(private timerServ: TimerService) {
    // console.log('----------------------------------');
    // console.log('In userLoginComponent constructor!');
    // console.log('object of TimerService:', timerServ);
    // console.log('----------------------------------');
    // this.timerServ = timer;
  }
  login() {
    console.log('************************************************');
    console.log('************************************************');
    console.log('************************************************');
    console.log('****************userLogin************************');
    console.log('************************************************');
    console.log('************************************************');
    console.log('----------------------------------');
    console.log('In userLoginComponent');
    console.log('initialized object of TimerService:', this.timerServ);
    console.log('----------------------------------');
    this.opration = '登录';
    console.log('------------ Before start -----------------');
    console.log('----------------------------------');
    console.log('timerServ:', this.timerServ);
    console.log();
    console.log('----------------------------------');
    this.timerServ.start();
    console.log('------------ After start -----------------');
    console.log('----------------------------------');
    console.log('timerServ:', this.timerServ);
    console.log('----------------------------------');
    console.log('开始向服务器提交登录信息...');
    for (let i = 0; i < 3800; i++) {
      console.log('');

    }
    console.log('服务器返回相应信息：登录成功！');
    console.log('----------------------------------');
    console.log('------------ Before end -----------------');
    console.log('----------------------------------');
    console.log('timerServ:', this.timerServ);
    console.log('----------------------------------');
    this.timerServ.end(this.opration);
    console.log('----------------------------------');
    console.log('------------ After end -----------------');
    console.log('----------------------------------');
    console.log('timerServ:', this.timerServ);
    console.log('----------------------------------');
  }
}
