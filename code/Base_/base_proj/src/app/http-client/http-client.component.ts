import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent {
  // httpCli: HttpClient;
  constructor(private httpCli: HttpClient) {  // 声明依赖一个服务对象
    console.log(httpCli);
    // this.httpCli = http;
  }

  // https://code.jquery.com/jquery-3.3.1.min.js
  // https://query.aliyun.com/rest/merak.api/deliveryInfo?id=5356973&count=5&env=com&byGroup=1&manual=true&static=false&lang=zh
  loadGoods() {
    let url = 'https://code.jquery.com/jquery-3.3.1.min.js';
    let url2 = 'https://blackhole-m.m.jd.com/getinfo';
    let url3 = 'https://query.aliyun.com/rest/merak.api/deliveryInfo?id=5356973&count=5&env=com&byGroup=1&manual=true&static=false&lang=zh';
    // 使用注入进来的HttpClient实例发起异步请求
    this.httpCli.get(url3).subscribe((res) => {
      console.log('得到了订阅的异步相应消息');
      console.log(res);

    });
  }
}
