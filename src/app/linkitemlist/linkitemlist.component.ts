import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linkitemlist',
  templateUrl: './linkitemlist.component.html',
  styleUrls: ['./linkitemlist.component.css']
})
export class LinkitemlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isCollapse: string = 'collapse';

  listtitle: string = 'Workshop List';

  linkitems: any[] = [
  	{
  		name: "Home",
  		icn: "fa fa-home fa-2x"
  	},
  	{
  		name: "Schedule",
  		icn: "fa fa-calendar fa-2x"
  	},
  	{
  		name: "Social",
  		icn: "fa fa-users fa-2x"
  	},
  	{
  		name: "Ask",
  		icn: "fa fa-weixin fa-2x"
  	},
  	{
  		name: "Nominate",
  		icn: "fa fa-trophy fa-2x"
  	}
  ];

  toggleRighttray(): void {
    (this.isCollapse == '') ? (this.isCollapse = 'collapse') : (this.isCollapse = '');
  }

}
