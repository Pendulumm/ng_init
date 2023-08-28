import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll, NavController } from '@ionic/angular';
import { DataUrlService } from '../data-url.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productList: any = [];
  total: number = 0;
  isLoading = true;
  // hasMore = true;
  defaultPic = 'https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png';

  @ViewChild('infiniteScroll')
  private infiniteScroll: IonInfiniteScroll | undefined;

  // 使用 "导航控制器"可以跳转到历史记录中的页面
  constructor(private router: Router, private nav: NavController, private httpCli: HttpClient, private url: DataUrlService) { }

  ngOnInit() {
    this.loadData();
  }

  navBack() {
    // this.router.navigateByUrl('/homePage');
    // 返回到历史记录中的上一个页面
    this.nav.back();
  }
  loadData() {
    if (this.isLoading) {
      this.httpCli.get(`${this.url.goodsListAPI}?pagenum=${this.url.queryObj.pagenum}&pagesize=${this.url.queryObj.pagesize}`).subscribe((res: any) => {
        console.log(res);
        this.productList = this.productList.concat(res.message.goods);
        this.total = res.message.total;
        // console.log(this.total);
        console.log(this.productList);
        // 
        // 
        if (this.url.queryObj.pagenum * this.url.queryObj.pagesize >= this.total) {
          this.isLoading = false;
          // this.hasMore = false;
          return;
        } else {
          this.url.queryObj.pagenum++;
          // console.log('loading continuously...');
          // console.log(this.url.queryObj.pagenum * this.url.queryObj.pagesize);
          // console.log(this.total);
        }
        // 通知无限滚动组件：数据加载完成
        this.infiniteScroll?.complete();
      });

    }
    else {
      return;
    }

  }
}
