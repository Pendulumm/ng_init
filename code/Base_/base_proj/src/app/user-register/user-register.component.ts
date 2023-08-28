import { Component } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
  providers: [TimerService]   //仅用于当前组件的服务提供者
})
export class UserRegisterComponent {
  opration = '';
  timerServ: TimerService;
  constructor(timer: TimerService) {
    // console.log('----------------------------------');
    // console.log('In userRegisterComponent constructor!');
    // console.log('object of TimerService:', timer);
    // console.log('----------------------------------');
    this.timerServ = timer;
  }
  register() {
    console.log('************************************************');
    console.log('************************************************');
    console.log('************************************************');
    console.log('**************userRegister**********************');
    console.log('************************************************');
    console.log('************************************************');
    console.log('----------------------------------');
    console.log('In userRegisterComponent');
    console.log('initialized object of TimerService:', this.timerServ);
    console.log('----------------------------------');
    console.log('------------ Before start -----------------');
    console.log('----------------------------------');
    console.log('timerServ:', this.timerServ);

    console.log('----------------------------------');
    this.opration = '注册';
    this.timerServ.start();
    console.log('------------ After start -----------------');
    console.log('----------------------------------');
    console.log('timerServ:', this.timerServ);

    console.log('----------------------------------');
    console.log('开始向服务器提交注册信息...');
    for (let i = 0; i < 6300; i++) {
      console.log('');
    }
    console.log('服务器返回相应信息：注册成功！');
    this.timerServ.end(this.opration);
    console.log('----------------------------------');
    console.log('------------ After end -----------------');
    console.log('----------------------------------');
    console.log('timerServ:', this.timerServ);
    console.log('----------------------------------');
  }

}
