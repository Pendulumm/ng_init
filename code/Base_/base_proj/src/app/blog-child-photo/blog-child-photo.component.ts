import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-child-photo',
  templateUrl: './blog-child-photo.component.html',
  styleUrls: ['./blog-child-photo.component.css']
})
export class BlogChildPhotoComponent {
  // 普通属性不能被父组件传值
  // child2Name = '';

  // 
  // 输入型属性：父组件可以利用这种属性传值进来
  // 
  // static getter_count = 0;
  // static setter_count = 0;

  @Input('ownerName')  //父组件输入
  galleryOwnerName = '';


  @Input()
  get name(): string {
    // console.log('getter~', BlogChildPhotoComponent.getter_count++);
    return this._name;
  }
  set name(name: string) {
    // console.log('setter~', BlogChildPhotoComponent.setter_count++);
    this._name = (name && name.trim()) || '<no name set>';
  }
  private _name = '';
}
