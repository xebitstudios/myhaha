import { Component, OnInit } from '@angular/core';
import { ITeamitemlist } from './teamitemlist.interface';

@Component({
  selector: 'app-teamitemlist',
  templateUrl: './teamitemlist.component.html',
  styleUrls: ['./teamitemlist.component.css']
})
export class TeamitemlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {  	
  }

    teams: ITeamitemlist[] = [
	    {
	    	imgloc: 'adam.burden.jpg',
			dname: 'Adam Burden',
			positn: 'Global Lead, Advanced Technology & Architecture'
	    },
	    {
	    	imgloc: 'nigel.barnes.jpg',
			dname: 'Nigel Barnes',
			positn: 'Accenture Global Lead Architect, and Lead Architecture Group & EALA – Advanced Technology & Architecture'
	    },
	    {
	    	imgloc: 'rod.barnard.jpg',
			dname: 'Rod Barnard',
			positn: 'APAC Lead, Advanced Technology & Architecture'
	    },
	    {
	    	imgloc: 'ezio.armando.jpg',
			dname: 'Ezio Armando',
			positn: 'Global Lead, Architecture Excellence and Master Technology Architect (MTA) Programme'
	    },
	    {
	    	imgloc: 'kenny.cheong.png',
			dname: 'Kenny Cheong',
			positn: 'Planning Lead, FY17 APAC-KL Technology Architecture Workshop'
	    }
    ]

}
