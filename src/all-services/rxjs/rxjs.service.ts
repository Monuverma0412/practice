import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  public userName = new BehaviorSubject("Username");

  constructor() { }

  updateValue(value: any){
    this.userName.next(value);
  }

}
