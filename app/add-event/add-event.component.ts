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

  addNewEvent(game: string, type: string, player:string, game_time:string, team:string) {
    this.eService.addEvents(this.game, this.type, this.player, this.game_time, this.team);
    window.alert('Event sucessfully added');
  }


  constructor(private eService: EventService) {}

  ngOnInit(){
    this.eventList = this.eService.EVENTS;
  }

}
