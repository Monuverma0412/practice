import { Component, Input, Output } from '@angular/core';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  messageData: any = "";
  Editor: any;
    public incomingEditor: any;

  login(Data: string) {
    console.log("parent", Data) 
    this.messageData = Data
    console.log("messagedata", this.messageData);
  }

  constructor() { }  

  ngOnInit(): void {
    this.incomingEditor = this.Editor
    console.log("Inside parent ", this.incomingEditor)
  }

  getUpdate(event: any) {
    this.messageData = event
  }

}
