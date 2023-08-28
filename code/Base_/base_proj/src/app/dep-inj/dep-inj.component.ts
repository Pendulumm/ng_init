import { Component } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-dep-inj',
  templateUrl: './dep-inj.component.html',
  styleUrls: ['./dep-inj.component.css'],
})
export class DepInjComponent {
  // 组件：服务使用者，必须声明依赖
  log_ : LogService;
  constructor(logServ: LogService) { //声明依赖
    console.log('logService Generated!');
    console.log(logServ);
    
    this.log_ = logServ;
  }

  addGoods() {
    console.log('正在添加商品...');
    let action = '添加了新的商品: xxxxx';
    // new LogService().doLog(action);
    this.log_.doLog(action);

  }
  deleteGoods() {
    console.log('正在删除商品...');
    let action = '删除了商品: xxx';
    this.log_.doLog(action);
  }
}
