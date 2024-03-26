import { Component } from '@angular/core';
import { PutService } from 'src/all-services/put/put.service';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.scss']
})
export class PutComponent {
  name: string = '';
  email: string = '';
  phone: string = '';

  constructor(private api: PutService) {}

  putData() {
    if (this.name && this.email && this.phone) {
      const data = {
        "name": this.name,
        "email": this.email,
        "phone": this.phone
      };

      this.api.putdata(data,2)
    } else {
      console.log('Please fill in all fields');
      alert('Please fill in all fields');

    }
  } 
}

