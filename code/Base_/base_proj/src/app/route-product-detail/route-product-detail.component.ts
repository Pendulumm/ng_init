import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-product-detail',
  templateUrl: './route-product-detail.component.html',
  styleUrls: ['./route-product-detail.component.css']
})
export class RouteProductDetailComponent implements OnInit {

  productId: number = 0;

  // 声明依赖：读取参数需要 "当前的路由" 服务
  constructor(private route: ActivatedRoute) {
    console.log('ActivatedRoute>>> ', route);
    
  }
  ngOnInit() {
    // 组件初始化完成，读取路由参数，进而根据此参数查询商品详情
    this.route.params.subscribe((data) => {
      console.log('得到了订阅的路由参数:', data);
      this.productId = data['id'];
      console.log(this.productId);
    })
  }
}
