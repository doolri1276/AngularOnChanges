import { Component } from '@angular/core';
import { TemplateData } from '@angular/core/src/view';
import { TempData } from './temp-data/temp-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numVal: number;
  strVal: string;
  temp: TempData;

  constructor(){
    this.numVal = 1;
    this.strVal = 'test';
    this.temp = new TempData(10, 'sample data');
  }
}
