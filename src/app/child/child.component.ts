import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() message: any;
  @Output() public updateValue = new EventEmitter<any>()
  public incomingMessage: any;
  smsData: any;

  constructor() { }

  ngOnInit(): void {
    this.incomingMessage = this.message
    console.log("Inside child ", this.incomingMessage)
  }


  login(Data: any) {
    console.log("chill", Data)
    this.smsData = Data;
    this.updateValue.emit(this.smsData)
  }
}
