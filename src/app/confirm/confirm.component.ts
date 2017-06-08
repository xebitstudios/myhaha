import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

export interface ConfirmModel {
  indx: number;
  confday: number;
  title:string;
  message:string;
}

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent extends DialogComponent<ConfirmModel, boolean> implements OnInit, ConfirmModel {
  indx: number;
  confday: number;
  title: string;
  message: string;

  constructor(dialogService: DialogService) { 
  	super(dialogService);
  }

  ngOnInit() {
  	this.getSessionsData(this.confday + 1);
  	this.getPresenterData(this.confday);
  	this.setStarRatingValue();
  	console.log("confday: " + (this.confday + 1) + ", session #: " + (this.indx + 1));
  }

  sdate: string = '';
  edate: string = '';
  location: string = '';
  vote: number = 0;
  abstract: string = '';

  star5: string[] = ['star-o', 'star-o', 'star-o', 'star-o', 'star-o']
  sessiondata: any[] = []
  presenters: any[] = []

  getSessionsData(dy: number): any[] {
  	console.log('here...');
  	if (dy == 1) {
  		this.sessiondata = [
		    {
		    	sessionId: 1,
		    	confday: 1,
		    	confdate: 'Jun 3, 2017',
		    	sdate: 'Tuesday, 10:10 am',
	  			edate: 'Tuesday, 11:00 am',
	  			location: 'Nusantara Ballrooms 2 and 3',
	  			vote: 3,
	  			abstract: 'Overview of Liquid Studio',
	  			presenters: [1, 2]
		    },
		    {
		    	sessionId: 2,
		    	confday: 1,
		    	confdate: 'Jun 3, 2017',
		    	sdate: 'Tuesday, 10:10 am',
	  			edate: 'Tuesday, 11:00 am',
	  			location: 'Nusantara Ballrooms 2 and 3',
	  			vote: 3,
	  			abstract: 'APAC Architecture Initiatives',
	  			presenters: [1]
		    }
		];
		return this.sessiondata;
  	} else if (dy == 2) {
  		this.sessiondata = [
		    {
		    	sessionId: 1,
		    	confday: 'Jun 4, 2017',
		    	sdate: 'Tuesday, 12:10 am',
	  			edate: 'Tuesday, 2:00 pm',
	  			location: 'Nusantara Ballrooms 2 and 3',
	  			vote: 3,
	  			abstract: 'Overview of Liquid Studio.',
	  			presenters: [2, 5]
		    },
		    {
		    	sessionId: 2,
		    	confday: 'Jun 4, 2017',
		    	sdate: 'Wednesday, 10:10 am',
	  			edate: 'Wednesday, 11:00 am',
	  			location: 'Highlands Hall 1',
	  			vote: 3,
	  			abstract: 'Artificial Intelligence',
	  			presenters: [3]
		    }
		];
		return this.sessiondata;
  	} else if (dy == 3) {  		
		this.sessiondata = [
		    {
		    	sessionId: 1,
		    	confday: 'Jun 5, 2017',
		    	sdate: 'Wednesday, 11:30 am',
	  			edate: 'Wednesday, 1:30 pm',
	  			location: 'Nusantara Ballrooms 1 and 2',
	  			vote: 3,
	  			abstract: 'Accenture Tech Vision 2017',
	  			presenters: [1, 4]
		    },
		    {
		    	sessionId: 2,
		    	confday: 'Jun 5, 2017',
		    	sdate: 'Thursday, 10:10 am',
	  			edate: 'Thursday, 11:00 am',
	  			location: 'Nusantara 2',
	  			vote: 3,
	  			abstract: 'Platforms Showcase',
	  			presenters: [2, 3]
		    },
		    {
		    	sessionId: 3,
		    	confday: 'Jun 5, 2017',
		    	sdate: 'Thursday, 11:30 am',
	  			edate: 'Thursday, 1:30 pm',
	  			location: 'Aviation Hall 6',
	  			vote: 3,
	  			abstract: 'Inventing The Future',
	  			presenters: [3, 4]
		    }
		];
		return this.sessiondata;
  	}
  }

  getPresenterData(dy: number): any[] {
  	if (dy == 0) {
  		this.presenters = [
		    {
		    	presenterId: 1,
		    	name: 'Justin Baird',
				bio: 'Justin Baird, FRSA brings over twenty years of management ahd high tect experience, in areas ranging from research and development engineering, analog and digital signal processing, embedded systems development, product management, high speed digital networks, large scale entertainment systems. mobile and web application development, and interactive multimedia installation technologies.',
				pplpage: 'https://people.accenture.com/People/user/justin.baird'
		    },
		    {
		    	presenterId: 2,
		    	name: 'Daniel Gunawan',
				bio: 'Daniel Gunawan is a Managing Director based in Singapore and is responsible for Adavnced Technology & Architecture (AT & A) practice in Asean and Emerging Technology practice in Singapore. Daniel spacializes in Technical Architecture delivery (Execution, Operations, Development and Infrastructure Architecture). Daniel has an extensive experience in managing and leading wide range or large scale technical projects.',
				pplpage: 'https://people.accenture.com/People/user/daniel.gunawan'
		    }
		];	
		return this.presenters;
  	} else if (dy == 1) {
  		this.presenters = [
		    {
		    	presenterId: 4,
		    	name: 'Bala Seshu Sesham',
				bio: 'Bala serves as a Senior Manager in Accenture"s Advanced Technology Architecture practice. He brings more than 20 years of strong experience in Application, Integration and Infrastructure architectures.  He brings strong hands-on experience designing and delivering web & mobile applications, System Integration,  Security Solutions and highly proficient with leading programming and scripting languages such as Java/J2EE, .NET, Python, Bash, C, C++ languages,  Open Source frameworks such as Hibernate, Spring, etc. He is also experienced in providing mature integration and caching solutions in the market such as Oracle Coherence, SAP PO, TIBCO, WebSphere MQ, MuleSoft etc.',
				pplpage: 'https://people.accenture.com/People/user/bala.seshu.k.sesham'
		    },
		    {
		    	presenterId: 5,
		    	name: 'Christopher Linde',
				bio: 'Christopher is an Agile Evangelist with 20+ years experience in IT and 13+ years experience in the Agile space. His focus has been on developing trusting partnerships between business and IT and bringing forth the best Agile methods to support the partnership needs. Agile delivery experience includes RUP, LSS, Lean, Kanban, and SCRUM in singleton and scaling efforts. His experience crosses areas of contribution that include Large scale Enterprise Agile Transformation for organizations shifting to mixed or 100% Agile delivery, Large scale Agile delivery for multiple geographically distributed teams (as well as collocated), C-Suite Subject Matter Expertise and Advisory, Mixed delivery; combining Lean Six Sigma and SCRUM delivery.',
				pplpage: 'https://people.accenture.com/People/user/christopher.s.linde'
		    }
		];
		return this.presenters;
  	} else if (dy == 2) {
  		this.presenters = [
		    {
		    	presenterId: 6,
		    	name: 'Matthew Lancaster',
				bio: 'Matt leads a global domain area called lightweight architectures, which brings the latest trends in custom development safely to the enterprise space. In this capacity, I lead a team of brilliant architects who build transformational software systems for clients, and I help design the software and system architecture for some of our clients" most critical systems of differentiation. H also leads solution architecture, capability and asset development, and sales for the platform. I also author a few of the technical (code level) assets, and too many presentations. I am often the guy who shows up to sell innovative technical solutions to client stakeholders.',
				pplpage: 'https://people.accenture.com/People/user/matthew.d.lancaster'
		    },
		    {
		    	presenterId: 3,
		    	name: 'Rajeev Kaul',
				bio: 'Rajeev has been a Technology Architect with Accenture for over 14 years and is a certified MTA.  He has led teams focused on Architecture and Delivery on large engagements across our Diamond Travel and Retail clients. Rajeev currently serves as the North American Lead for Digital Technology in ATA and is the Chief Architect on the Marriott International account.  In addition to this, he also supports ATA by leading the FEAD practice globally which provides Modern Web Solutions to Accenture clients globally and is the home for the Accenture Open Web Platform.  Rajeev also serves as the lead for the Connected Travel Offering and is a member of the Accenture DC City Council.',
				pplpage: 'https://people.accenture.com/People/user/rajeev.k.kaul'
		    }
		];
		return this.presenters;
  	}
  }

  starValue(indx: number): void {
  	this.star5 = ['star-o', 'star-o', 'star-o', 'star-o', 'star-o']
  	for(var a=0;a<indx+1;a++) {
  		this.star5[a] = 'star';
  	}
  	// send this vote to the API
  	//sendSessionVoteToApi(this.sessiondata[0].sessionId, indx);
  }

  setStarRatingValue() {
  	this.starValue(this.sessiondata[0].vote - 1);
  }

  confirm() {
    // we set dialog result as true on click on confirm button, 
    // then we can get dialog result from caller code 
    this.result = true;
    this.close();
  }

  cancel() {
  	this.close();
  }

}
