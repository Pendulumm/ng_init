import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-route-list-edit',
    template: `<div>edit productId {{productId}}</div>`,
})
export class RouteProductEditComponent implements OnInit {

    productId: number = 0;

    constructor(private route: ActivatedRoute) {
        console.log('ActivatedRoute>>> ', route);
    }
    ngOnInit() {
        this.route.params.subscribe((data) => {
            console.log('params.subscribe:', data);
            this.productId = data['id'];
        })
    }
}
