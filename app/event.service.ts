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

getEvents() {
  return this.EVENTS;
}

getShots(){
  let tem: Event[] = this.getEvents();
    let i: number = 0;
    let shots: number = 0;
    let team1: string = tem[0].team;
    while (i < tem.length) {
      if(tem[i].team == team1)
      {
        if(tem[i].type == 'Shot')
        {
          shots = shots + 1;
        }
      }
      i = i + 1;
  }
  return tem.length;
}

addEvents(game: string, type: string, player: string, game_time: string, team: string) {
  const newEvent: Event = {
    game: game,
    type: type,
    player: player,
    game_time: game_time,
    team: team
  }
  this.EVENTS.push(newEvent);
}

  constructor() { }
}

