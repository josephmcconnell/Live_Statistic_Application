import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit{
  eventList: Event[] = [];
  game: string = '';
  type: string = '';
  player: string = '';
  game_time: string = '';
  team: string = '';

  addNewEvent(){
    const newEvent: Event = {
      game: this.game,
      type: this.type,
      player: this.player,
      game_time: this.game_time,
      team: this.team
    }
    this.eventList.push(newEvent);
  }


  constructor(private eService: EventService) {}

  ngOnInit(){
    this.eventList = this.eService.EVENTS;
  }

}
