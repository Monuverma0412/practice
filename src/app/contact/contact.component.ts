import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  post: any ="contactComponentData";
  // myValue:any
  // name = "Angular";
 
  // @ViewChildren(AboutComponent) myValue: QueryList<AboutComponent>;
 
  // ngAfterViewInit() {
  //     console.log("Hello ", this.myValue);
  // }
 
 }