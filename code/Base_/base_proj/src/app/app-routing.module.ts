import { NgModule } from '@angular/core';
import { ResolveFn, RouterModule, Routes } from '@angular/router';
import { RoutePrIndexComponent } from './route-pr-index/route-pr-index.component';
import { RoutePrUserCenterComponent } from './route-pr-user-center/route-pr-user-center.component';
import { RoutePrNotFoundComponent } from './route-pr-not-found/route-pr-not-found.component';
import { RoutePrInfoComponent } from './route-pr-info/route-pr-info.component';
import { RoutePrAvatarComponent } from './route-pr-avatar/route-pr-avatar.component';
import { RoutePrSecurityComponent } from './route-pr-security/route-pr-security.component';
import { LoginGuard } from './login.guard';
import { TimeGuard } from './time.guard';
import { RouteProductDetailComponent } from './route-product-detail/route-product-detail.component';
import { RouteProductListComponent } from './route-product-list/route-product-list.component';
import { RouteUserCenterComponent } from './route-user-center/route-user-center.component';
import { LocationStrategy, HashLocationStrategy, Location } from '@angular/common';

const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('child a');

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: RoutePrIndexComponent },
  {
    path: 'user/center',
    component: RoutePrUserCenterComponent,
    // 当前路由可以被激活吗？ 应用路由守卫
    canActivate: [LoginGuard, TimeGuard],
    children: [ // 嵌套的二级路由
      // { path: '', component: RoutePrInfoComponent },
      { path: 'info', title: resolvedChildATitle, component: RoutePrInfoComponent },
      { path: 'avatar', component: RoutePrAvatarComponent },
      { path: 'security', component: RoutePrSecurityComponent }
    ]
  },
  { path: 'pList', component: RouteProductListComponent },
  { path: 'pDetail/:id', component: RouteProductDetailComponent },
  { path: 'uCenter/list', component: RouteUserCenterComponent },
  { path: '**', component: RoutePrNotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
