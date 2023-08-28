import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CountdownTimerComponent } from './countdown-timer.component'

@Component({
  selector: 'app-blog-parent',
  templateUrl: './blog-parent.component.html',
  styleUrls: ['./blog-parent.component.css']
})
export class BlogParentComponent implements AfterViewInit {
  // Displays 'Dr. IQ', '<no name set>', 'Bombasto'
  names = ['Dr. IQ', '   ', '  Bombasto  '];
  major = 1;
  minor = 23;

  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }

  agreed = 0;
  disagreed = 0;
  voters = ['Dr. IQ', 'Celeritas', 'Bombasto'];

  onVoted(agreed: boolean) {
    if (agreed) {
      this.agreed++;
    } else {
      this.disagreed++;
    }
  }

  @ViewChild(CountdownTimerComponent)
  private timerComponent!: CountdownTimerComponent;

  seconds() { return 0; }

  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    // this.seconds = () => this.timerComponent.seconds  // ERROR ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '0'. Current value: '11'.

    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  start() { this.timerComponent.start(); }
  stop() { this.timerComponent.stop(); }


  userName: string = 'Jerome';

  // @ViewChild('c0', { static: true })
  // child0: any;
  @ViewChild('c1', { static: true }) chlid1: any;

  // @ViewChild('c2', { static: true })
  // c2: any;
  constructor() {

  }
  changeHandler(event: Event) {
    console.log('Parent handle an event emitted from subComponent');
    console.log(event);
    this.userName = event as any;
  }

  printHash() {
    // 输出父组件内部有识别符的子组件
    // console.log(this.child0);
    console.log(this.chlid1);
    // console.log(this.c2);
  }


}
