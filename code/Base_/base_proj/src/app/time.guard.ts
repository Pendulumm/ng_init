import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PermissionsService {
  private _forceLogin = false;
  get forceLogin(): boolean { return this._forceLogin }
  set forceLogin(value: boolean) { this._forceLogin = value; }

  constructor(private router: Router) { }

  // 如果当前的访问时间是6~23点则允许激活路由，否则阻止
  canActivate() {
    console.log('正在进行访问时间检验...');
    console.log('时间状态>>>', this.forceLogin);
    let hour = new Date().getHours();
    if (this.forceLogin || (hour >= 9 && hour <= 13)) {
      console.log('------------------------------------------------');
      console.log('登录成功!');
      return true;
    } else {
      // 可以选择执行：页面跳转
      console.log('当前时间不可访问...');
      this.router.navigateByUrl('/index');
      return false;
    }
  }

}
export const TimeGuard: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(PermissionsService).canActivate()
  }
