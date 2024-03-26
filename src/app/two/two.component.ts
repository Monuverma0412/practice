import { Component } from '@angular/core';
import { DataServieService } from 'src/all-services/data/data-servie.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})

export class TwoComponent {
  getData: any =[];
  upDateData : any =[];
  constructor(private getServiceData: DataServieService, private route: Router) {}

  ngOnInit() {
    this.getData=this.getServiceData.getData()
    console.log("in component two", this.getServiceData.getData());
  }
  
  navigateData(getData: any) {
    this.upDateData.push(getData);
    this.route.navigate(["Two"], { queryParams: { data: JSON.stringify(getData()) } });
  }
}
