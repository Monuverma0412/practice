import { Component } from '@angular/core';
import { RxjsService } from 'src/all-services/rxjs/rxjs.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component {
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