import { Component } from '@angular/core';

@Component({
  selector: 'app-myc04-ngifelse',
  templateUrl: './myc04-ngifelse.component.html',
  styleUrls: ['./myc04-ngifelse.component.css']
})
export class Myc04NgifelseComponent {
  adult = false;

  changeAge = () => {
    this.adult = !this.adult;
  }


}
