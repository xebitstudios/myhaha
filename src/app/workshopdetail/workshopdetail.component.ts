import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workshopdetail',
  templateUrl: './workshopdetail.component.html',
  styleUrls: ['./workshopdetail.component.css']
})
export class WorkshopdetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title: string = 'Welcome to the 2017 Accenture A.I Now Workshop';
  subtitle1: string = 'The 2017 A.I Now Workshop will focus on the future of the enterprise, and will provide training for architecting solutions in the era of New IT.';
  subtitle2: string = 'This year"s event will include tracks where participants can explore topics in the areas of';
  topics: string[] = [
  	'Contemporary Architecture',
  	'Cloud',
	'DevOps',
	'Emerging Technology',
	'Intelligent Architecture',
	'Analytics & Big Data',
	'Innovations',
	'and more!'
  ];
  salutation: string = 'We look forward to seeing you!';
}
