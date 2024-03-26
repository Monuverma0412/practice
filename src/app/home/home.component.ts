import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public chooseValue = '';

  colorName1: string = "red"
  colorName2: string = "green"
  colorName3: string = 'gray'
  colorName4: string = 'pink'
  colorChange: string = "yellow";


  onNumberChange(event: Event) {
    this.chooseValue = (event.target as HTMLInputElement).value;
  }
  event = 'any';
  title = 'practice';
  name = "";
  dob = "";
  age = "";
  password = "";
  nameExist: boolean = true;
  dobExist: boolean = true;
  ageExist: boolean = true;
  passwordExist: boolean = true;
  colorIs: boolean = false
  x = new Date();
  valTrue: boolean = true


  constructor(private route: Router) {
    console.log("constructor is calling")
  }

  ngOnInit() {
    console.log("ngOnInit is calling")
  }


  // custom directive bna kr color change 
  changeColor(color: string) {
    this.colorChange = color
  }

  login(first: string, second: string, third: string, fourth: string) {
    if (first == "") {
      this.nameExist = false;
    } else if (second == "") {
      this.dobExist = false;
    } else if (third == "") {
      this.ageExist = false;
    } else if (fourth == "") {
      this.passwordExist = false;
    }

    if (first !== "" && second !== "" && third !== "" && fourth !== "") {
      const userData: any = {
        "name": first,
        "dob": second,
        "age": third,
        "password": fourth
      };


      const localData = localStorage.getItem("tableData")
      if (localData) {
        let userState = JSON.parse(localData)
        userState.push(userData)
        localStorage.setItem("tableData", JSON.stringify(userState))
      }
      else {
        localStorage.setItem("tableData", JSON.stringify([userData]))
      }
      this.route.navigate(["table"]);
    } else {
      alert("Please fill all data");
    }
  }

  onNameChange(value: any) {
    if (value != "") {
      this.nameExist = true
    }
    else {
      this.nameExist = false
    }
  }

  onDobChange(value: any) {
    if (value != "") {
      this.dobExist = true
    }
    else {
      this.dobExist = false
    }
  }

  onAgeChange(value: any) {
    if (value != "") {
      this.ageExist = true
    }
    else {
      this.ageExist = false
    }
  }

  onPasswordChange(value: any) {
    if (value != "") {
      this.passwordExist = true
    }
    else {
      this.passwordExist = false
    }
  }

}

