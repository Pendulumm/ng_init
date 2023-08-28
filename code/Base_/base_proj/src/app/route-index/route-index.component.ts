import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-index',
  templateUrl: './route-index.component.html',
  styleUrls: ['./route-index.component.css']
})
export class RouteIndexComponent {

  // 声明依赖，则可以被注入 "路由器" 服务
  constructor(private router: Router) {

  }
  jumpTo() {
    // 跳转到商品列表页,需要 "路由器" 服务
    this.router.navigateByUrl('/pList');
  }
}
