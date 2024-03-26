import { Component } from '@angular/core';
import { RxjsService } from 'src/all-services/rxjs/rxjs.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component {
  userName: any = ""

  constructor(private _rxjs: RxjsService) {
    this._rxjs.userName.subscribe((data) => {
      this.userName = data;
      console.log(this.userName);
    }); 
  }

  updateVal(data: any) {
    this._rxjs.updateValue(data.value);
  }

}
