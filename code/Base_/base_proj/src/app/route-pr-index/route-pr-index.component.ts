import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-pr-index',
  templateUrl: './route-pr-index.component.html',
  styleUrls: ['./route-pr-index.component.css']
})
export class RoutePrIndexComponent {

  constructor(private router: Router) {

  }

  navToUserCenter() {
    this.router.navigateByUrl('/user/center');
  }
}
