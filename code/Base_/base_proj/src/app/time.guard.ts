import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class TimeGuard implements CanActivate {

  constructor(private router: Router) {

  }

  // 如果当前的访问时间是6~23点则允许激活路由，否则阻止
  canActivate() {
    console.log('正在进行访问时间检验...');
    let hour = new Date().getHours();
    if (hour >= 18 && hour <= 23) {
      return true;
    } else {
      // 可以选择执行：页面跳转
      this.router.navigateByUrl('/index');

      return false;
    }
  }

}
