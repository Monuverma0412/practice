import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public data: any = [];

  constructor() { }
  ngOnInit() {
    let localData = localStorage.getItem("tableData")
    if (localData) {
      this.data = JSON.parse(localData);
    }
  }
}
