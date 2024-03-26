import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  // title = "Forms Group"
  // formSubmited = false
  // constructor() { }

  // ngOnInit(): void { }

  // loginForm = new FormGroup({
  //   user: new FormControl('', [Validators.minLength(3), Validators.required]),
  //   password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  //   lastName: new FormControl<string>('', [Validators.minLength(3), Validators.required]),

  // })
  // loginUser() {
  //   console.log(this.loginForm.value)
  //   this.formSubmited = true
  // }

  // get user() {
  //   return this.loginForm.get('user')
  // };

  // get password() {
  //   return this.loginForm.get("password")
  // }

  // get lastName(){
  //   return this.loginForm.get("lastName")
  // }


  complete = false
  ngOnInit(): void { }


  studentForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    middleName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    fullName: new FormControl('', [Validators.required, Validators.minLength(11)]),
    date: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.minLength(2)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10 - 12)]),
    gmail: new FormControl('', [Validators.required, Validators.email]),
    // file: new FormControl('', [Validators.required]),
    // century: new FormControl('', [Validators.required]),
    // state: new FormControl('', [Validators.required,]),
  })
  student() {
    console.log(this.studentForm.value);
    this.complete = true
  }

  get firstName() {
    return this.studentForm.get('firstName')
  }
  get middleName() {
    return this.studentForm.get('middleName')
  }
  get lastName() {
    return this.studentForm.get('lastName')
  }
  get fullName() {
    return this.studentForm.get('fullName')
  }
  get date() {
    return this.studentForm.get('date')
  }
  get age() {
    return this.studentForm.get('age')
  }
  get phone() {
    return this.studentForm.get('phone')
  }
  get gmail() {
    return this.studentForm.get('gmail')
  }
  // get file() {
  //   return this.studentForm.get('file')
  // }
  // get century() {
  //   return this.studentForm.get('century')
  // }
  // get state() {
  //   return this.studentForm.get('state')
  // }




  
}
