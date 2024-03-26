import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DataServieService } from 'src/all-services/data/data-servie.service';


@Component({
  selector: 'app-servicechildd',
  templateUrl: './servicechildd.component.html',
  styleUrls: ['./servicechildd.component.scss']
})
export class ServicechilddComponent {

  geetData: any = [];
  login: any;
  message: any;


  constructor(private dataService: DataServieService, private route: Router) { }

  ngOnInit() {
    this.geetData = this.dataService.geetData()
    console.log("in component servicechildd", this.dataService.geetData());

  }

  navigateData(geetData: any) {
    this.login.push(geetData);
    // this.route.navigate(["servicechildd"], { queryParams: { data: JSON.stringify(geetData()) } });
  }
  submit(Data: any) {
    console.log("servicechildd", Data)
    this.geetData = Data;
    this.dataService.seetData(Data)

  }
}
