import { Component } from '@angular/core';
import { DataServieService } from 'src/all-services/data/data-servie.service';

@Component({
  selector: 'app-serviceparent',
  templateUrl: './serviceparent.component.html',
  styleUrls: ['./serviceparent.component.scss']
})
export class ServiceparentComponent {
  messageData: any = '';
  
  constructor(public dataService: DataServieService) { }
  
  data = "";
  geetData: any;

  login(value: string) {
    console.log('serviceparent', value);
    this.dataService.seetData(value);
  }

  ngOnInit() {
    this.messageData = this.dataService.geetData();
    console.log("in component serviceparent", this.data);
  }

  
}
