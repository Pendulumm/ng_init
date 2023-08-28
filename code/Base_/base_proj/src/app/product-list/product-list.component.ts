import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList = [{
    id: 1,
    title: 'Product 1',
    price: 100,
    scm: 'scm...',
    score: 100
  }];

  // 依赖注入：httpClient 服务对象
  constructor(private httpCli: HttpClient) {

  }
  public loadData(): void {
    let url = 'https://query.aliyun.com/rest/merak.api/deliveryInfo?id=5356973&count=5&env=com&byGroup=1&manual=true&static=false&lang=zh'
    this.httpCli.get(url).subscribe((res) => {
      // console.log('得到了订阅的相应消息');
      // console.log(res);
      const dataList = res as any;
      // console.log(dataList.data.infoList);
      // this.productList = dataList.data.infoList;
      this.productList = this.productList.concat(dataList.data.infoList);
    })
  }
  delete(item: any) {
    // console.log('delete item', item);
    this.productList = this.productList.filter((ele) => {
      return ele.id !== item.id
    })
  }

  ngOnInit(): void {
    // 组件初始化完成，立即请求一次服务器端数据
    this.loadData();
  }

}
