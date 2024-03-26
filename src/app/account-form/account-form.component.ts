import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent implements OnInit {
  user : any = {  name: '', lastNmae:"", dob: '',  password: '' };

  constructor(){}

ngOnInit(): void {
  this.submitForm();
}
  submitForm() {

    console.log('Form submitted:', this.user);
  }
}
