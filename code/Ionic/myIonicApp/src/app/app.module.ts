import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { MainComponent } from './main/main.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

// 创建路由词典
const routes = [
  // { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: '', component: HomePageComponent },
  { path: 'homePage', component: HomePageComponent },
  { path: 'userLogin', component: UserLoginComponent },
  { path: 'productList', component: ProductListComponent },
  { path: 'productDetail/:pid', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', component: NotFoundComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,    //首页组件
    ProductListComponent,  //商品列表组件
    CartComponent,          //购物车组件
    UserLoginComponent,     //用户登录组件
    MainComponent,          //主界面组件
    ProductDetailComponent,  //商品详情页组件
    NotFoundComponent         //待访问页面不存在 组件
  ],
  imports: [
    BrowserModule,                  //ngFor ngIf
    IonicModule.forRoot(),          // ion-xxx
    // AppRoutingModule,            //脚手架创建的默认路由模块，此处不需要
    RouterModule.forRoot(routes),  //注册路由模块
    FormsModule,                   //包含ngModel
    HttpClientModule,             //包含HttpClient
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
