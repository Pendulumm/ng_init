import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlertController, InfiniteScrollCustomEvent, IonInfiniteScroll } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  // @ViewChild('swiper', { static: true })
  // private swiperRef: ElementRef | undefined;

  items: string[] = [];
  public alertButtons = ['OK'];
  isAlertOpen = false;

  @ViewChild('infiniteScroll', { static: true })
  private infiniteScroll: IonInfiniteScroll | undefined;

  constructor(private alertController: AlertController) {

  }
  ngOnInit() {
    // 组件初始化完成，让轮播广告 "开始自动播放"
    // this.swiperRef!.nativeElement!.swiper!.autoplay.running = true;
    // console.log(this.swiperRef);

    // // Non-null Assertion Operator (Postfix!)
    // this.swiperRef!.nativeElement.swiper.autoplay.start()
    // console.log(this.swiperRef?.nativeElement.swiper);

    // this.generateItems();
  }


  // logActiveIndex() {
  //   // 可选链操作符：?.
  //   // https://blog.csdn.net/qq_43683753/article/details/128232165
  //   //
  //   // https://blog.csdn.net/qq_44721831/article/details/121737173
  //   // 
  //   console.log(this.swiperRef?.nativeElement.swiper.activeIndex);
  // }

  // doClick() {
  //   console.log('click click !!');

  // }

  // private generateItems() {
  //   const count = this.items.length + 1;
  //   for (let i = 0; i < 50; i++) {
  //     this.items.push(`Item ${count + i}`);
  //   }
  // }
  // onIonInfinite(e: any) {
  //   console.log('loading more...');
  //   // console.log(e);
  //   // console.log((e as InfiniteScrollCustomEvent).target.complete);
  //   // 
  //   // 此处应该发送异步XHR请求，获取服务器端数据

  //   // 此处使用定时器模拟:3s后获得了更多数据

  //   setTimeout(() => {
  //     this.generateItems();
  //     // 通知 "无限滚动组件"：数据已加载完成
  //     // 
  //     // (e as InfiniteScrollCustomEvent).target.complete();
  //     // another way
  //     this.infiniteScroll?.complete();
  //   }, 1200);
  // }

  // setOpen(isOpen: boolean) {
  //   // this.isAlertOpen = isOpen;
  //   this.isAlertOpen = isOpen;
  //   console.log('setting isOpen:' + isOpen);

  // }
  // dismissListener(e: any) {
  //   console.log(e);
  //   // this.isAlertOpen = false;
  // }
  // async presentAlert() {
  //   const alert = await this.alertController.create({
  //     header: 'Alert',
  //     subHeader: 'Important message',
  //     message: 'This is an alert!',
  //     buttons: ['OK'],
  //   }).then((alertThen) => {
  //     alertThen.present();
  //   });

  //   // await alert.present();

  // }

  

}
