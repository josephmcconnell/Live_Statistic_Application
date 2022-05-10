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
    },
    {
      type: 'Shot',
      game: 'Rocket League',
      player: 'dorscher',
      game_time: '3:44',
      team: 'NDSU'
    },
    {
      type: 'Save',
      game: 'Rocket League',
      player: 'dorscher',
      game_time: '4:21',
      team: 'NDSU'
    },
    {
      type: 'Shot',
      game: 'Rocket League',
      player: 'dorscher',
      game_time: '4:21',
      team: 'NDSU'
    },
    {
      type: 'Goal',
      game: 'Rocket League',
      player: 'Joe',
      game_time: '4:21',
      team: 'NDSU'
    },
    {
      type: 'Save',
      game: 'Rocket League',
      player: 'Joe',
      game_time: '4:21',
      team: 'NDSU'
    },
    {
      type: 'Save',
      game: 'Rocket League',
      player: 'Ktool',
      game_time: '4:21',
      team: 'NDSU 2'
  },
  {
    type: 'Shot',
    game: 'Rocket League',
    player: 'Ktool',
    game_time: '3:44',
    team: 'NDSU 2'
  },
  {
    type: 'Goal',
    game: 'Rocket League',
    player: 'TurtleZilla',
    game_time: '4:21',
    team: 'NDSU 2'
  },
  {
    type: 'Shot',
    game: 'Rocket League',
    player: 'TurtleZilla',
    game_time: '4:21',
    team: 'NDSU 2'
  },
  {
    type: 'Goal',
    game: 'Rocket League',
    player: 'GreekAvenger',
    game_time: '4:21',
    team: 'NDSU 2'
  },
  {
    type: 'Save',
    game: 'Rocket League',
    player: 'GreekAvenger',
    game_time: '4:21',
    team: 'NDSU 2'
  }
];

getEvents() {
  return this.EVENTS;
}


//Get stats of Players in Team 1 
//(Team 1 is the first team in the list of events and player 1 is the first player listed for that team, ect.)
getStatsRL(){
  let tem: Event[] = this.getEvents();
  let shots: number = 0;
  let saves: number = 0;
  let goals: number = 0;
  let team1: string = tem[0].team;
  
  //Identify player 1
  let team1player1: string = tem[0].player;
  let team1player2: string = "";
  let team1player3: string = "";

  //Identify player 2
  for(let i = 0; i < tem.length; i++) {
    if(tem[i].team == team1 && tem[i].player !== team1player1)
    {
      team1player2 = tem[i].player;
      break;
    }
  }

  //Identify player 3
  for(let i = 0; i < tem.length; i++) {
    if(tem[i].team == team1 && tem[i].player !== team1player1 && tem[i].player !== team1player2)
    {
      team1player3 = tem[i].player;
      break;
    }
  }

  //Get player 1 stats
  for (let i = 0; i < tem.length; i++) {
    if(tem[i].team == team1 && tem[i].player == team1player1)
    {
      if(tem[i].type == 'Shot')
      {
        shots++;
      }
      else if(tem[i].type == 'Save')
      {
        saves++;
      }
      else if(tem[i].type == 'Goal')
      {
        goals++;
      }
    }
  }
  let team1player1Stats = [team1player1, shots, saves, goals];

  //Reset stat counters
  shots = 0;
  saves = 0;
  goals = 0;

  //Get player 2 stats
  for (let i = 0; i < tem.length; i++) {
    if(tem[i].team == team1 && tem[i].player == team1player2)
    {
      if(tem[i].type == 'Shot')
      {
        shots++;
      }
      else if(tem[i].type == 'Save')
      {
        saves++;
      }
      else if(tem[i].type == 'Goal')
      {
        goals++;
      }
    }
  }
  let team1player2Stats = [team1player2, shots, saves, goals];

  //Reset stat counters
  shots = 0;
  saves = 0;
  goals = 0;

  //Get player 3 stats
  for (let i = 0; i < tem.length; i++) {
    if(tem[i].team == team1 && tem[i].player == team1player3)
    {
      if(tem[i].type == 'Shot')
      {
        shots++;
      }
      else if(tem[i].type == 'Save')
      {
        saves++;
      }
      else if(tem[i].type == 'Goal')
      {
        goals++;
      }
    }
  }
  let team1player3Stats = [team1player3, shots, saves, goals];

  //Collect Team 1 Player Stats
  let team1Stats = [team1player1Stats, team1player2Stats, team1player3Stats];



  //Team 2 
  //Identify Team 2
  let team2: string = "";
  for(let i = 0; i < tem.length; i++) {
    if(tem[i].team !== team1)
    {
      team2 = tem[i].team;
      break;
    }
  }
  
  //Declare players
  let team2player1: string = "";
  let team2player2: string = "";
  let team2player3: string = "";

//Identify player 1
for(let i = 0; i < tem.length; i++) {
  if(tem[i].team == team2)
  {
    team2player1 = tem[i].player;
    break;
  }
}

  //Identify player 2
  for(let i = 0; i < tem.length; i++) {
    if(tem[i].team == team2 && tem[i].player !== team2player1)
    {
      team2player2 = tem[i].player;
      break;
    }
  }

  //Identify player 3
  for(let i = 0; i < tem.length; i++) {
    if(tem[i].team == team2 && tem[i].player !== team2player1 && tem[i].player !== team2player2)
    {
      team2player3 = tem[i].player;
      break;
    }
  }

  //Reset stat counters
  shots = 0;
  saves = 0;
  goals = 0;

  //Get player 1 stats
  for (let i = 0; i < tem.length; i++) {
    if(tem[i].team == team2 && tem[i].player == team2player1)
    {
      if(tem[i].type == 'Shot')
      {
        shots++;
      }
      else if(tem[i].type == 'Save')
      {
        saves++;
      }
      else if(tem[i].type == 'Goal')
      {
        goals++;
      }
    }
  }
  let team2player1Stats = [team2player1, shots, saves, goals];

  //Reset stat counters
  shots = 0;
  saves = 0;
  goals = 0;

  //Get player 2 stats
  for (let i = 0; i < tem.length; i++) {
    if(tem[i].team == team2 && tem[i].player == team2player2)
    {
      if(tem[i].type == 'Shot')
      {
        shots++;
      }
      else if(tem[i].type == 'Save')
      {
        saves++;
      }
      else if(tem[i].type == 'Goal')
      {
        goals++;
      }
    }
  }
  let team2player2Stats = [team2player2, shots, saves, goals];

  //Reset stat counters
  shots = 0;
  saves = 0;
  goals = 0;

  //Get player 3 stats
  for (let i = 0; i < tem.length; i++) {
    if(tem[i].team == team2 && tem[i].player == team2player3)
    {
      if(tem[i].type == 'Shot')
      {
        shots++;
      }
      else if(tem[i].type == 'Save')
      {
        saves++;
      }
      else if(tem[i].type == 'Goal')
      {
        goals++;
      }
    }
  }
  let team2player3Stats = [team2player3, shots, saves, goals];

  //Collect Team 2 Player Stats
  let team2Stats = [team2player1Stats, team2player2Stats, team2player3Stats];

  let gamesStats = [team1Stats, team2Stats, team1, team2]

  return gamesStats;
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

