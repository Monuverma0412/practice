import { Component } from '@angular/core';
import { RxjsService } from 'src/all-services/rxjs/rxjs.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component {
  userName: any = ""

  constructor(private _rxjs: RxjsService, private _rxjsService: RxjsService) {
    this._rxjs.userName.subscribe((data) => {
      this.userName = data;
      console.log(this.userName);
    });

  }

  updateVal(data: any) {
    this._rxjs.updateValue(data.value);
  }

}