import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-favorite-color',
  template: `
    Favorite Color: <input type="text" [formControl]="favoriteColorControl" (ngModelChange)="modelChangeView()">
    <p>Value: {{ favoriteColorControl.value }}</p>
    <p>Value: {{ favoriteColorControl.valueChanges | async }}</p>
    <input type="text" [formControl]="name" >
    <button (click)="updateName()">change name</button>
    <p >name:{{name.value}}</p>
    <hr>
  `
})
export class FavoriteColorComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.favoriteColorControl);
    this.favoriteColorControl.setValue('red');
  }

  favoriteColorControl = new FormControl('');
  name = new FormControl('');

  modelChangeView() {
    // console.log(this.favoriteColorControl);
    // console.log(this.favoriteColorControl.value);
    console.log('favoriteColorControl>>>', this.favoriteColorControl);

    this.favoriteColorControl.valueChanges.subscribe((value) => {
      console.log('valueChanges subcribe>>>', value);
    });
  }
  updateName() {
    this.name.setValue('Nancy');
  }
}