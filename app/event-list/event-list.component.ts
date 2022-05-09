import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../event';
import { EventService } from '../event.service';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'], 
  providers: [EventService]
})
export class EventListComponent{
  
  @Input() event: Event = {
    type: '',
    game: '',
    player: '',
    game_time: '',
    team: ''
  };

  eventList: Event[] = [];
  type: string = '';
  game: string = '';
  player: string = '';
  game_time: string = '';
  team: string = '';



  constructor(private eService: EventService) {}

  ngOnInit(){
    this.eventList = this.eService.EVENTS;
  }

}
