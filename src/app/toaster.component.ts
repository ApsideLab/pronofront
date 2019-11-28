import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

@Component({
  selector: 'app-toaster',
  template: `
    Toaster notfication.<br/>
    <div *ngFor="let time of times">{{time}}</div>
  `,
})
export class ToasterComponent {
  times: number[] = [];
  constructor() {
    for (let index = 0; index < 5; index++) {
      this.times.push(index);
    }
  }
}

@NgModule({
  imports: [BrowserModule],
  bootstrap: [ToasterComponent],
  declarations: [ToasterComponent],
  exports: [ToasterComponent]
})
export class ToasterComponentModule { }
