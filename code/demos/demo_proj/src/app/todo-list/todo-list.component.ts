import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  // Model 数据
  // todoList = [];
  todoList = [
    '开会',
    '上课',
    '培训'
  ];
  userInput=''; // 双向数据绑定到input

  delete(index: number) {
    // 从数组的指定下标处删除一个元素
    this.todoList.splice(index,1);
  }
  addItem(){
    // console.log(this.userInput);
    this.todoList.push(this.userInput);
    //
    // 清空当前的用户输入 
    this.userInput='';
  }
  
}
