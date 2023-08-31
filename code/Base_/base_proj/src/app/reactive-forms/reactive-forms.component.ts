import { Component, OnInit } from '@angular/core';

// 导入表单控件
import { AbstractControl, FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  // Validators.required 表示必填项
  // username: any = new FormControl('', [Validators.required]);
  //
  // // 验证规则：要求最少长度为3
  // username: any = new FormControl('', [Validators.minLength(3)]);
  // username: any = new FormControl('', [Validators.maxLength(6)]);
  password = new FormControl('',);

  // FormControl只能控制一个表单元素
  // username = new FormControl('', [this.customValidate]);

  // FormGroup用来控制整个表单
  // loginForm: FormGroup = new FormGroup({
  //   username: new FormControl('chocolate',),
  //   password: new FormControl('', [Validators.required]),
  // });

  // 



  constructor(private formBuilder: FormBuilder) {

  }
  ngOnInit() {
    // console.log(this.username);
    // console.log(this.username.hasError('required'));

  }

  loginForm = this.formBuilder.group({
    username: ['chocolate'],
    password: ['', Validators.required],
  });


  // getUserName() {
  //   // console.log(this.username);
  //   // console.log('当前用户名', this.username.value);

  // }
  // 更新用户名
  // setUserName() {
  //   this.username.setValue('TOM')
  // }

  // 只要数据改变就会执行自定义验证器
  customValidate(control: AbstractControl): any {
    // console.log(control);
    // console.log(control.value);
    if (/^[a-z]{3,6}$/.test(control.value)) {
      // 成功 返回null
      return null;
    } else {
      // 失败 返回错误对象
      return { regerror: true }
    }
  }

  handleSubmit() {
    // console.log('表单提交了!',this.loginForm.value);
    // console.log('表单提交了!', this.loginForm.value, '表单是否验证成功:', this.loginForm.valid);

    if (this.loginForm.valid) {
      console.log('表单验证成功,发送请求提交表单');
    } else {
      console.log('表单验证失败');
    }
  }
}
