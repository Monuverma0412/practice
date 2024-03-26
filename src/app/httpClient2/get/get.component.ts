import { Component } from '@angular/core';
import { GetService } from 'src/all-services/get/get.service';
@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.scss']
})


export class GetComponent {
  users: any = [];

  constructor(private api: GetService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.api.getPostData().subscribe((data: any) => {
      this.users = data;
      console.log('Running this code', data);
    });


  }
}