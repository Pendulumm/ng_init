import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-version-child',
    template: `
    <h3>Version {{major}}.{{minor}}</h3>
    <h4>Change log:</h4>
    <ul>
      <li *ngFor="let change of changeLog">{{change}}</li>
    </ul>
  `
})
export class VersionChildComponent implements OnChanges {
    @Input() major = 0;
    @Input() minor = 0;
    changeLog: string[] = [];

    ngOnChanges(changes: SimpleChanges) {
        const log: string[] = [];
        // console.log('Changes>>>', changes);

        for (const propName in changes) {
            const changedProp = changes[propName];
            // console.log('propName>>>', propName);
            // console.log('changedProp>>>', changedProp);

            const to = JSON.stringify(changedProp.currentValue);
            if (changedProp.isFirstChange()) {
                log.push(`Initial value of ${propName} set to ${to}`);
            } else {
                const from = JSON.stringify(changedProp.previousValue);
                log.push(`${propName} changed from ${from} to ${to}`);
            }
        }
        this.changeLog.push(log.join('; '));
    }
}