import { Component } from '@angular/core';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {
  // Model
  uname = 'tom';
  upwd = '';  //用户输入的密码
  msg = '密码长度在6~12位之间';   //密码的提示消息


  changeHandler() {
    console.log(this.uname);
  }

  // 处理密码值改变
  upwdChange() {
    console.log(this.upwd);
    if (this.upwd.length < 6) {
      this.msg = '密码太短了';
    } else if (this.upwd.length > 12) {
      this.msg = '密码太长了';
    } else {
      this.msg = '长度合法';
    }

  }
}
