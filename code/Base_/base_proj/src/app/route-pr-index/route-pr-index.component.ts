import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginGuard } from '../login.guard';
import { PermissionsService } from '../time.guard';

@Component({
  selector: 'app-route-pr-index',
  templateUrl: './route-pr-index.component.html',
  styleUrls: ['./route-pr-index.component.css'],
})
export class RoutePrIndexComponent {

  constructor(
    private router: Router,
    private logginServ: LoginGuard,
    private timeServ: PermissionsService
  ) { }

  navToUserCenter() {
    this.router.navigateByUrl('/user/center');
  }

  changeLogginInfo() {
    console.log('登录状态已改变...');
    this.logginServ.isLogin = true;
  }
  changeLogginTime() {
    console.log('时间状态已改变...');
    this.timeServ.forceLogin = true;
  }
  viewDetail() {
    this.router.navigateByUrl('/pList');
  }
}
