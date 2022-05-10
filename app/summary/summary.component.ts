import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../event';
import { EventService } from '../event.service';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'], 
  providers: [EventService]
})
export class SummaryComponent{


  getTotalShots(){
    return this.eService.getShots();
  }

  htmlYouWantToAdd: string = "";

  addHTML(){
    this.htmlYouWantToAdd = "<b>"+ this.getTotalShots() +"</b>";
  }

  // @Input() shots: number = this.getTotalShots();

  constructor(private eService: EventService) {}

}
