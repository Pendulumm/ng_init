import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-blog-child-modify',
  templateUrl: './blog-child-modify.component.html',
  styleUrls: ['./blog-child-modify.component.css']
})
export class BlogChildModifyComponent {
  userInput = '';

  // 事件发射器
  @Output()   //输出型属性，可以向父组件输出数据
  changeEvent = new EventEmitter() 
  
  modify() {
    // 子组件将要传递给父组件
    // console.log(this.userInput);
    // 子组件 此时想发射数据给父组件
    this.changeEvent.emit(this.userInput);
  }
}
