import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-route-pr-info',
  templateUrl: './route-pr-info.component.html',
  styleUrls: ['./route-pr-info.component.css']
})
export class RoutePrInfoComponent {
  constructor(private router: Router, private route: ActivatedRoute){

  }
  goToItems() {
    this.router.navigate(['../avatar'], { relativeTo: this.route });
  }
}
