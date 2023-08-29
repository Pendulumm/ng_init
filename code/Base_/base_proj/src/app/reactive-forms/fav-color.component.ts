import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-favorite-color',
  template: `
    Favorite Color: <input type="text" [formControl]="favoriteColorControl" (ngModelChange)="modelChangeView()">
  `
})
export class FavoriteColorComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.favoriteColorControl);
    this.favoriteColorControl.setValue('red');
  }

  favoriteColorControl = new FormControl('');

  modelChangeView() {
    // console.log(this.favoriteColorControl);
    console.log(this.favoriteColorControl.value);
  }
}