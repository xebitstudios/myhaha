import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linkitem',
  templateUrl: './linkitem.component.html',
  styleUrls: ['./linkitem.component.css']
})
export class LinkitemComponent implements OnInit {

  constructor() { };

  ngOnInit() {
  };

  home : string = 'Home';
  schedule: string = 'Schedule';
  social: string = 'Social';
  ask: string = 'Ask';
  nominate: string = 'Nominate';

}
