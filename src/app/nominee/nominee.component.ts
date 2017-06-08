import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nominee',
  templateUrl: './nominee.component.html',
  styleUrls: ['./nominee.component.css']
})
export class NomineeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	// ApiService.getPageData();
  	this.getPageData();
  }

  // showPanel: string = 'hide';
  showPanel: boolean = true;
  whyNom: string = '';
  whoNom: string = '';

  dselected: number = 0;
  dnominee: string = '';
  dbio: string = '';
  dwhyNom: string = '';
  dwhoNom: string = '';

  nominees: any[] = []

  getPageData(): any[] {
  	// call the API to get JSON data for page to render
  	this.nominees = [
	    {
	    	nominee: 'Accenture Leadership Panel',
			bio: ''
	    },
	    {
	    	nominee: 'Ajay Nair',
			bio: 'Ajay Nair is experienced in Technology and Management consulting from top tier consulting companies worldwide. The persistence, pervasiveness, and plain messiness that constitute race relations in America have rendered traditional models of social change ineffective in higher education. While incremental change has occurred, the continuing inadequacies of traditional models are apparent in well-documented racial disparities across generations of our nation"s social landscape - disparities re-exposed by today"s Black Lives Matter movement.'
	    },
	    {
	    	nominee: 'Rodney Erickson',
			bio: 'Rodney Erickson is a content marketing professional at HubSpot, an inbound marketing and sales platform that helps companies attract visitors, convert leads, and close customers. Previously, Rodney worked as a marketing manager for a tech software startup. He graduated with honors from Columbia University with a dual degree in Business Administration and Creative Writing.'
	    }
	];
	return this.nominees;
  }

  nominateNow(indx: number): void {
  	this.dselected = indx;
  	this.dnominee = this.nominees[this.dselected].nominee;
  	this.dbio = this.nominees[this.dselected].bio;
  	this.showPanel = !this.showPanel;
  }

  nominate(): void {
  // 	sendToAPI{
  // 		dnominee: this.dnominee,
		// dbio: this.dbio,
		// dwhyNom: this.dwhyNom,
		// dwhoNom: this.dwhoNom
  // 	}
    console.log({
  		dselected: this.dselected,
  		dnominee: this.dnominee,
		dbio: this.dbio,
		dwhyNom: this.dwhyNom,
		dwhoNom: this.dwhoNom
  	});
    this.clearFields();

  	this.goBack();
  }

  clearFields(): void {
  	  this.dselected = 0;
	  this.dnominee = '';
	  this.dbio = '';
	  this.dwhyNom = '';
	  this.dwhoNom = '';
  }

  goBack(): void {
  	this.showPanel = !this.showPanel;
  }

}
