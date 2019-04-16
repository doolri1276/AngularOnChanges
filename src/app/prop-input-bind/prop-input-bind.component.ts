import { Component, SimpleChanges, Input, OnChanges } from '@angular/core';
import { TempData } from '../temp-data/temp-data.model';

@Component({
  selector: 'prop-input-bind',
  templateUrl: './prop-input-bind.component.html',
  styleUrls: ['./prop-input-bind.component.css']
})
export class PropInputBindComponent implements OnChanges {
  
  @Input() myNum: number;
  @Input() myStr: string;
  @Input() tempData: TempData;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.myNum && !changes.myNum.isFirstChange()){

    }
    for(let propName in changes){
      let change = changes[propName];
      if(change.isFirstChange()) {
        console.log(`first change : ${propName}`);
      }else{
        console.log(`prev : ${change.previousValue}, cur : ${change.currentValue}`);
      }
    }
  
  }



}
