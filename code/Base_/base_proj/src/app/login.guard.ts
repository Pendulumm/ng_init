import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({   //路由守卫都是 "可注入的" 服务对象
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {
    private _isLogin = false; //此处应该根据用户是否登录了而改变
    get isLogin(): boolean { return this._isLogin; }
    set isLogin(value) { this._isLogin = !this._isLogin }
    canActivate() {
        console.log('正在进行登录检验...');
        console.log('登录状态>>>', this.isLogin);

        if (this.isLogin) {
            return true;    // return true: 可以激活后续的组件
        } else {
            console.log('登录失败...');
            return false;   // return false: 阻止激活后续的组件
        }
    }
} 