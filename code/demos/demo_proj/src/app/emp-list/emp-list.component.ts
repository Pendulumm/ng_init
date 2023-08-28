import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent {
  // empList = [];
  empList = [
    {
      eid: 101,
      ename: 'Liang liang',
      salary: 5000.12345,
      birthday: '3/2/1998',
      sex: 1,
      pStatus: 10
    }, {
      eid: 102,
      ename: 'Ran ran',
      salary: 12345678,
      birthday: '3/1/1999',
      sex: 0,
      pStatus: 20
    }, {
      eid: 103,
      ename: 'Dong dong',
      salary: 5000.12789,
      birthday: '1000',
      sex: 2,
      pStatus: 30
    }, {
      eid: 104,
      ename: 'Taotao',
      salary: 800,
      birthday: '2000',
      sex: 1,
      pStatus: 20
    }

  ];

  deleteItem(index: number) {
    // 从数据中删除指定的下标
    this.empList.splice(index, 1);
  }

}
