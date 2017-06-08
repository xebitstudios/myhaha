import { Component, OnInit } from '@angular/core';
import { ConfirmComponent } from '../confirm/confirm.component';
import { DialogService } from "ng2-bootstrap-modal";
import { ITeamitemlist } from '../teamitemlist/teamitemlist.interface';

@Component({
  selector: 'app-globalnav',
  templateUrl: './globalnav.component.html',
  styleUrls: ['./globalnav.component.css']
})
export class GlobalnavComponent implements OnInit {

  constructor(private dialogService:DialogService) { }

  ngOnInit() {
  	this.sesns = this.grps[this.currentteam].sesns;
  	this.confday = this.grps[this.currentteam].confday;
  	this.confdate = this.grps[this.currentteam].confdate;
  }

  showConfirm(indx: number): void {
  	console.log("index is: " + indx);
    let disposable = this.dialogService.addDialog(ConfirmComponent, {
    	confday: this.currentteam,
    	indx: indx,
        title:'Confirm title', 
        message:'Confirm message'})
        .subscribe((isConfirmed)=>{
            //We get dialog result
            if(isConfirmed) {
                console.log('OK button clicked!');
            }
            else {
                console.log('Close button clicked!');
            }
        });
    //We can close dialog calling disposable.unsubscribe();
    //If dialog was not closed manually close it by timeout
    // setTimeout(()=>{
    //     disposable.unsubscribe();
    // },10000);
  }

  currentteam: number = 0;
  confday: number = 1;
  confdate: string = 'hello';
  sesns: ITeamitemlist[] = [];

  grps: any[] = [
    {
	  	confdate: 'Jun 3, 2017',
	  	confday: 1,
	  	sesns: [
		    {
		    	title: 'Breakfast',
				authrs: 'All',
				loctn: 'Essence Restaurant, Level 1',
				tim: '6:30 - 8:30',
				sessionId: 1
		    },
		    {
		    	title: 'APAC Architecture Initiatives',
				authrs: 'Micro Hering, Daniel Gunawan & Harshu Deshpande',
				loctn: 'Nusantara Ballrooms 2 and 3',
				tim: '8:30 - 9:20',
				sessionId: 2
		    },
		    {
		    	title: 'Artificial Intelligence',
				authrs: 'David Soderstrom',
				loctn: 'Nusantara Ballrooms 2 and 3',
				tim: '9:20 - 10:10',
				sessionId: 3
		    }
	    ]
    },
    {
	  	confdate: 'Jun 4, 2017',
	  	confday: 2,
	  	sesns: [
		    {
		    	title: 'Breakfast',
				authrs: 'All',
				loctn: 'Essence Restaurant, Level 1',
				tim: '6.30 - 8.30',
				sessionId: 1
		    },
		    {
		    	title: 'Accenture Tech Vision 2017',
				authrs: 'Justin Baird',
				loctn: 'Nusantara Ballrooms 2',
				tim: '8:30 - 9:20',
				sessionId: 2
		    },
		    {
		    	title: 'Platforms Showcase',
				authrs: 'Luke Higgins, Steve Howard & Ajay Nair',
				loctn: 'Nusantara Ballrooms 3',
				tim: '9:20 - 10:10',
				sessionId: 3
		    },
		    {
		    	title: 'Liquid Studio Overview',
				authrs: 'Justin Baird & Daniel Gunawan',
				loctn: 'Atlantis Room 5',
				tim: '10:10 - 11.30',
				sessionId: 4
		    },
		    {
		    	title: 'Inventing The Future',
				authrs: 'Adrian Balon',
				loctn: 'Mahogany Hall 2',
				tim: '12:10 - 14:00',
				sessionId: 5
		    }
	    ]
    },
    {
	  	confdate: 'Jun 5, 2017',
	  	confday: 3,
	  	sesns: [
		    {
		    	title: 'Breakfast',
				authrs: 'All',
				loctn: 'Essence Restaurant, Level 1',
				tim: '6.30 - 8.30',
				sessionId: 1
		    },
		    {
		    	title: 'Virtual Reality Demo',
				authrs: 'Reuben Coutinho',
				loctn: 'Nusantara Ballroom 3',
				tim: '10:10 - 11.00',
				sessionId: 2
		    }
	    ]
    }
    // {
	  	// confdate: 'Jun 6, 2017',
	  	// sesns: [
		  //   {
		  //   	title: 'Breakfast',
				// authrs: 'All',
				// loctn: 'Essence Restaurant, Level 1',
				// tim: '6.30 - 8.30',
				// sessionId: 10
		  //   },
		  //   {
		  //   	title: 'Design Thinking Deep Dive',
				// authrs: 'Auswell Cjia & Tim Chong',
				// loctn: 'Nusantara Ballroom 1',
				// tim: '11:00 - 12:50',
				// sessionId: 11
		  //   },
		  //   {
		  //   	title: 'Platforms Showcase',
				// authrs: 'Luke Higgins, Steve Howard & Ajay Nair',
				// loctn: 'Nusantara Ballrooms 3',
				// tim: '13:10 - 14:10',
				// sessionId: 12
		  //   }
	   //  ]
    // }
  ]

  onMoveForward(): void {
  	if(this.currentteam < this.grps.length-1) {
  		this.sesns = this.grps[this.currentteam + 1].sesns;
  		this.confdate = this.grps[this.currentteam + 1].confdate;
  		this.confday = this.grps[this.currentteam + 1].confday;
  		this.currentteam++;
  	}  	
  }

  onMoveBack(): void {
  	if(this.currentteam > 0) {
  		this.sesns = this.grps[this.currentteam - 1].sesns;
  		this.confdate = this.grps[this.currentteam - 1].confdate;
  		this.confday = this.grps[this.currentteam - 1].confday;
  		this.currentteam--;
  	}  	
  }

}
