import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
constructor( private route: Router  ){}
  home() {
this.route.navigate(["home"])
  };
  about() {
    this.route.navigate(["about"])
  };
  contact() {
this.route.navigate(["contact"])
  };
  parent() {
    this.route.navigate(["parent"])
  };
  servicechildd(){
    this.route.navigate(["servicechildd"]);
   }
  table(){
    this.route.navigate(["table"])
  }
  one(){
   this.route.navigate(["one"]);
  } 
  two(){
    this.route.navigate(["two"])
  }
  serviceparent(){
    this.route.navigate(["serviceparent"])
  }
api(){
  this.route.navigate(["api"])
}
comp(){
  this.route.navigate(["comp"])
}
testing(){
  this.route.navigate(["testing"])
}
accountForm(){
  this.route.navigate(["accountForm"])
}
forms(){
  this.route.navigate(["forms"])

}
}
