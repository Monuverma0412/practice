import { Component } from '@angular/core';
import { RxjsService } from 'src/all-services/rxjs/rxjs.service';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.scss']
})
export class CompComponent {
  userName: any = ""
  constructor(private _rxjsService: RxjsService) {
    this._rxjsService.userName.subscribe((data)=>{
      this.userName = data
    })
  }
  
}

