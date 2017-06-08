import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  postVal: string = '';

  pOne(num: number): void {
  	console.log('index is: ' + num);
  	this.qstblk[num].votecount++;
  	// sendVoteAdd(num); use websockets to update all clients
  }

  submitPost(postVal: string): void {
  	this.qstblk.push({
  		qst: this.postVal,
  		votecount: 0
  	});
 //  	sendQstToServer({
 //  		qst: this.postVal,
 //  		votecount: 0
 //  	}); 
	// call POST API and call GET API to update screen, then use websockets to update all clients
  }

  isVotes(vt: number) {
  	if (vt > 1) {
  		return 'votes';
  	} else {
  		return 'vote';
  	}
  }

  qstblk: any[] = [
  	{
  		qst: 'Who is the keynote speaker for this workshop?',
  		votecount: 2
  	},
  	{
  		qst: 'What company does the main speaker come from?',
  		votecount: 5
  	},
  	{
  		qst: 'How old is the current speaker?',
  		votecount: 1
  	},
  	{
  		qst: 'How many years of experience does the speaker have doing microservices?',
  		votecount: 7
  	}
  ]


}
