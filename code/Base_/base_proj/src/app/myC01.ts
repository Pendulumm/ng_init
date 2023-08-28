// 
// 装饰器 (decorator)   用于指定class的用途,本质是个函数
// 

import { Component } from "@angular/core";

// 组件 = 模板 + 脚本 + 样式
@Component({
    selector: 'myC01',
    // selector: '[myTitle]'   // Attribute selectors: [attr]
    templateUrl: 'myC01.html',
})
export class MyC01 {

}

// 组件可以当做属性，也可以当做元素
// <div myTitle="xxx"></div>
// <myC01></myC01>