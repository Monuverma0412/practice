import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from 'src/all-services/httpservice/httpservice.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
  users: any = [];
  name: any = '';
  first: any = "";
  editValue: string = "";
  editId: any = null;
  ifUpdate: boolean = false

  constructor(private api: HttpserviceService) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.api.getTaskData().subscribe((data: any) => {
      this.users = data;
      console.log('Fetched data:', data);
    });
  }

  PostTask() {
    if (this.name) {

      const data = {
        "name": this.name,
      };

      this.api.postData(data);
      setTimeout(() => {
        window.location.reload()
      }, 1000);
    } else {
      console.log('Please fill in the fields');
    }
  }

  PutTask(id: any, value: any) {
    if (id != null || undefined || "" && value != null || undefined || '') {
      this.ifUpdate = true
    }
    else {
      this.ifUpdate = false
    }
    this.editValue = value
    this.editId = id;
  }

  updateTask(id: any, value: any) {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    this.api.PutTask(value, id);
  }       

  DeleteTask(id: any) {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    const data = {
      "name": this.DeleteTask
    };
    this.api.deleteData(data, id);
  }

  
}
