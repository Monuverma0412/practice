import { Component } from '@angular/core';
import { RxjsService } from 'src/all-services/rxjs/rxjs.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.scss']
})
export class Comp4Component {
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