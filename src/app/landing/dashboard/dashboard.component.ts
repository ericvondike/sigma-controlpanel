import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  opened: boolean;

  constructor() { }

  ngOnInit(): void {
    this.setSideNaveContentToolbarHeigth();
  }

  openClose(): void {
    this.opened = ! this.opened;
  }

  setSideNaveContentToolbarHeigth(): void {
    document.getElementById('sideNavToolbar').style.height = document.getElementById('homeButton').style.height;
  }

}
