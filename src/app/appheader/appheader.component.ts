import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.css']
})
export class AppheaderComponent implements OnInit {

  constructor() { };

  ngOnInit() {
  };

  conftitle : string = 'FY 17 APAC-KL Technology Architecture Workshop';
  confsubtitle : string = 'Architecting Solutions with New IT';

}
