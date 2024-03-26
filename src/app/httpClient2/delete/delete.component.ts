import { Component } from '@angular/core';
import { DeleteService } from 'src/all-services/delete/delete.service';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
  name: string = '';
  email: string = '';
  phone: string = '';

  constructor(private api: DeleteService) {}


  
  deleteData() {
   
      const data = {
        "name": this.name,
        "email": this.email,
        "phone": this.phone
      };

      this.api.deleteData(data,1)
    } 

  } 


