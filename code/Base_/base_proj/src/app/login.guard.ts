import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({   //路由守卫都是 "可注入的" 服务对象
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {
    private isLogin = true; //此处应该根据用户是否登录了而改变

    canActivate() {
        console.log('正在进行登录检验...');

        if (this.isLogin) {
            return true;    // return true: 可以激活后续的组件
        } else {
            return false;   // return false: 阻止激活后续的组件
        }
    }
} 