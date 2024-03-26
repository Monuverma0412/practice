import { Component } from '@angular/core';
import { DataServieService } from 'src/all-services/data/data-servie.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent {
  constructor(private sharedService: DataServieService) {

  }
  data = "";
  updateData(value: string) {
    this.sharedService.setData(value);

  }

}
