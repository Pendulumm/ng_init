import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataUrlService {
  // 
  // https://www.escook.cn/docs-uni-shop
  // https://www.showdoc.com.cn/128719739414963/2513235043485226
  // 
  // 
  // 服务器的主机地址
  public host = 'https://api-hmugo-web.itheima.net/';
  // 轮播图API地址
  public swiperAPI = this.host + 'api/public/v1/home/swiperdata';
  // 导航API地址
  public navAPI = this.host + 'api/public/v1/home/catitems';
  // 楼层API地址
  public floorAPI = this.host + 'api/public/v1/home/floordata';
  // 分类列表
  public categoriesApi = this.host + 'api/public/v1/categories';
  // 商品列表API 
  public goodsListAPI = this.host + 'api/public/v1/goods/search';
  // 请求参数对象
  public queryObj = {
    // 查询关键词
    query: '',
    // 商品分类Id
    cid: '',
    // 页码值
    pagenum: 1,
    // 每页显示多少条数据
    pagesize: 10
  }
  // 商品详情API
  public goodsDetailsAPI = this.host + 'api/public/v1/goods/detail';
  // 
  // 
  constructor() { }
}
