import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataUrlService } from '../data-url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  swipers: any = [];
  goods: any = [];
  navs: any = [];
  product_list: any = [];
  // 
  // 依赖注入两个服务对象：url地址服务,http请求服务
  constructor(private httpCli: HttpClient, private url: DataUrlService, private router: Router) { }

  ngOnInit() {
    this.httpCli.get(`${this.url.swiperAPI}`).subscribe(res => {
      // console.log(res);
      this.swipers = (res as any).message;
      // console.log('swiper:', this.swipers);

    })
    this.httpCli.get(`${this.url.navAPI}`).subscribe(res => {
      // console.log(res);
      this.navs = (res as any).message;
      console.log('navs:', this.navs);

    })
    this.httpCli.get(this.url.floorAPI).subscribe(res => {
      this.goods = (res as any).message;
      // console.log(this.goods);
      for (let i = 0; i < this.goods.length; i++) {
        for (let j = 0; j < this.goods[i].product_list.length; j++) {
          this.product_list[i] = this.goods[i].product_list;
        }
      }
      // console.log(this.product_list);
    })
  }
  navClickHandler(item: any) {
    if (item.name == '分类') {
      this.router.navigateByUrl('/productList')
    }
  }
}
