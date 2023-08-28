import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataUrlService } from '../data-url.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  // 
  productDetail: any = [];

  @ViewChild('htmlContent')
  private htmlContent: ElementRef | any
  // 

  // router: 路由器，用于路由跳转
  // route: 路由，表示当前激活的路由对象，用于读取地址路由参数
  constructor(private nav: NavController, private route: ActivatedRoute, private httpCli: HttpClient, private url: DataUrlService) { }

  ngOnInit() {
    // 组件初始化完成后，读取 "当前路由" 地址中的参数(要查询的商品的编号)
    this.route.params.subscribe((data: any) => {
      console.log('路由参数', data);
      // 根据商品编号请求该商品的详情
      this.getGoodsDetail(data.pid);
    })
  }
  navBack() {
    // this.router.navigateByUrl('/homePage');
    // 返回到历史记录中的上一个页面
    this.nav.back();
  }
  getGoodsDetail(goods_id: number) {
    this.httpCli.get(`${this.url.goodsDetailsAPI}?goods_id=${goods_id}`).subscribe((res: any) => {
      console.log(res);
      if (res.meta.status === 200) {
        this.productDetail = res.message;
        console.log(this.productDetail);
        this.productDetail.goods_introduce = res.message.goods_introduce.replace(/<img /g, '<img style="display:block;" ').replace(/webp/g, 'jpg');

        console.log(this.htmlContent);
        this.htmlContent.el.innerHTML = this.productDetail.goods_introduce;
      } else {
        console.log('err');

      }

    });
  }


}
