import { Component } from '@angular/core';

interface Item {
  id: number;
  name: string;
}

@Component({
  selector: 'app-myc02-ngfor',
  templateUrl: './myc02-ngfor.component.html',
  styleUrls: ['./myc02-ngfor.component.css']
})
export class Myc02NgforComponent {
  empList = ['亮亮', '然然', '东东', '涛涛'];
  items: Item[] = [
    { id: 1, name: 'item1' },
    { id: 2, name: 'item2' },
    { id: 3, name: 'item3' }
  ]
  trackByItems(index: number, item: Item): number { return item.id; }
}
