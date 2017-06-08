import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-teamitem',
  templateUrl: './teamitem.component.html',
  styleUrls: ['./teamitem.component.css']
})
export class TeamitemComponent implements OnInit {

  constructor() { 
	  
  }

  ngOnInit() {

  }

  @Input()
  imgloc: string = 'Ned';

  @Input()
  dname: string = 'Visol';

  @Input()
  positn: string = 'AOWP Lead';

}
