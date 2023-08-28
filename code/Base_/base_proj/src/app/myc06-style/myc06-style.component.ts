import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc06-style',
  templateUrl: './myc06-style.component.html',
  styleUrls: ['./myc06-style.component.css']
})
export class Myc06StyleComponent implements OnInit {
  ngOnInit(): void {
    this.setCurrentClasses();
  }
  isSpecial = true;
  changeIsSpecial = () => {
    this.isSpecial = !this.isSpecial;
  }

  currentClasses: Record<string, boolean> = {};
  canSave = true;
  isUnchanged = true;
  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses = {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special: this.isSpecial
    };
  }

  // 待绑定的样式对象
  myStyleObj = {
    backgroundColor: '#383',
    color: '#fff',
    'border-color': '#252'
  };
  // 待绑定的CSS class对象
  myClassObj = {
    btn: true,
    'btn-danger': false,    //dash
    // btnSuccess: true,       //camelcase
    'btn-success': true,
    show: true,
    hidden: false
  };
  loadMore() {
    this.myStyleObj.backgroundColor = '#833';
    this.myStyleObj['border-color'] = '#522';
  }
  loadMore2() {
    this.myClassObj['btn-success'] = false;
    this.myClassObj['btn-danger'] = true;
    this.myClassObj.hidden = true;
    setTimeout(() => {
      this.myClassObj.hidden = false;
    }, 2000);
  }


}
