import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';




import { MyC01 } from './myC01';
import { MyC02 } from './myC02.component';
import { MyC03 } from './myC03/myC03.component';

import { Myc05Component } from './myc05/myc05.component';
import { TestComponent } from './test/test.component';
import { Myc01CounterComponent } from './myc01-counter/myc01-counter.component';
import { Myc02NgforComponent } from './myc02-ngfor/myc02-ngfor.component';
import { Myc03NgifComponent } from './myc03-ngif/myc03-ngif.component';
import { Myc04NgifelseComponent } from './myc04-ngifelse/myc04-ngifelse.component';
import { Myc05NgifComponent } from './myc05-ngif/myc05-ngif.component';
import { Myc06StyleComponent } from './myc06-style/myc06-style.component';
import { Myc07SwitchComponent } from './myc07-switch/myc07-switch.component';
import { Myc08NgModelComponent } from './myc08-ng-model/myc08-ng-model.component';

// FormsModule 中提供了 ngModel 指令
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// 自定义指令
import { NeedEmDirective } from './need-em.directive';
// 依赖注入
import { DepInjComponent } from './dep-inj/dep-inj.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { UserComponent } from './user/user.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ProductListComponent } from './product-list/product-list.component';

import { BlogParentComponent } from './blog-parent/blog-parent.component';
import { BlogChildModifyComponent } from './blog-child-modify/blog-child-modify.component';
import { BlogChildPhotoComponent } from './blog-child-photo/blog-child-photo.component';

import { RouteIndexComponent } from './route-index/route-index.component';
import { RouteProductListComponent } from './route-product-list/route-product-list.component';
import { RouteProductDetailComponent } from './route-product-detail/route-product-detail.component';
import { RouteUserCenterComponent } from './route-user-center/route-user-center.component';
import { RouterModule } from '@angular/router';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';
import { RoutePrIndexComponent } from './route-pr-index/route-pr-index.component';
import { RoutePrUserCenterComponent } from './route-pr-user-center/route-pr-user-center.component';
import { RoutePrNotFoundComponent } from './route-pr-not-found/route-pr-not-found.component';
import { RoutePrInfoComponent } from './route-pr-info/route-pr-info.component';
import { RoutePrAvatarComponent } from './route-pr-avatar/route-pr-avatar.component';
import { RoutePrSecurityComponent } from './route-pr-security/route-pr-security.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { VersionChildComponent } from './blog-child-photo/version-child.component';
import { VoterComponent } from './blog-child-modify/voter.component';
import { CountdownTimerComponent } from './blog-parent/countdown-timer.component';
import { AstronautComponent } from './blog-parent/astronaut.component';
import { MissionControlComponent } from './blog-parent/missioncontrol.component';
import { FavoriteColorComponent } from './reactive-forms/fav-color.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { LocationStrategy, HashLocationStrategy, Location } from '@angular/common';



// import { LogService } from './log.service';






//声明路由词典 (路由地址和路由组件的对应集合)
const routes = [
  // { path: '', component: RouteIndexComponent },
  { path: '', redirectTo: 'uCenter/list', pathMatch: 'full' },    // 重定向需要指定 "路由地址匹配方式 可为 'full'/'prefix' "
  { path: 'indexx', component: RouteIndexComponent },
  { path: 'pList', component: RouteProductListComponent },
  { path: 'pDetail/:id', component: RouteProductDetailComponent },
  { path: 'uCenter/list', component: RouteUserCenterComponent },
  //  ** 地址，匹配任意格式的地址, 必须放在路由词典最后
  { path: '**', component: RouteNotFoundComponent },
];






@NgModule({
  declarations: [
    AppComponent,
    MyC01,
    MyC02,
    MyC03,
    Myc05Component,
    TestComponent,
    Myc01CounterComponent,
    Myc02NgforComponent,
    Myc03NgifComponent,
    Myc04NgifelseComponent,
    Myc05NgifComponent,
    Myc06StyleComponent,
    Myc07SwitchComponent,
    Myc08NgModelComponent,
    NeedEmDirective,
    DepInjComponent,
    HttpClientComponent,
    UserComponent,
    UserLoginComponent,
    UserRegisterComponent,
    ProductListComponent,
    BlogParentComponent,
    BlogChildModifyComponent,
    BlogChildPhotoComponent,
    RouteIndexComponent,
    RouteProductListComponent,
    RouteProductDetailComponent,
    RouteUserCenterComponent,
    RouteNotFoundComponent,
    RoutePrIndexComponent,
    RoutePrUserCenterComponent,
    RoutePrNotFoundComponent,
    RoutePrInfoComponent,
    RoutePrAvatarComponent,
    RoutePrSecurityComponent,
    ReactiveFormsComponent,
    VersionChildComponent,
    VoterComponent,
    CountdownTimerComponent,
    MissionControlComponent,
    AstronautComponent,

    FavoriteColorComponent,
    ProfileEditorComponent
  ],
  imports: [
    //浏览器模块，只要Angular 用于Web项目，就必须导入此模块，其中导出了 CommonModule(ngFor,ngIf...)，
    // 不包含FormsModule(ngModel)
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes as any),    //导入路由模块，并注册了路由词典，用于根模块中
    ReactiveFormsModule,                    //响应式表单模块

  ],
  providers: [
    // Location, { provide: LocationStrategy, useClass: HashLocationStrategy }, // Hash routes

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
