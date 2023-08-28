import { Component } from '@angular/core';

@Component({
  selector: 'app-myc05-ngif',
  templateUrl: './myc05-ngif.component.html',
  styleUrls: ['./myc05-ngif.component.css']
})
export class Myc05NgifComponent {
  // 是否还有更多数据可供加载
  hasMore = true;
  // hasMore = false;

  // 加载更多数据
  loadMore() {
    // 假装加载了很多数据
    // 
    this.hasMore = false;
  }

}
