import { Injectable } from '@angular/core';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class EventService {


  EVENTS: Event[] = [
    {
        type: 'Shot',
        game: 'Rocket League',
        player: 'CoolCatMeow',
        game_time: '4:21',
        team: 'NDSU'
    }
];

  constructor() { }
}

