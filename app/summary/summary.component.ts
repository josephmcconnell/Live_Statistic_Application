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


  htmlYouWantToAdd: string = "";

  addHTML(){
    if(this.eService.EVENTS[0].game == "Rocket League"){
      this.htmlYouWantToAdd = "<h5>"+ this.eService.getStatsRL()[2] +"</h5><table class=\"table\"><thead><tr><th scope=\"col\">Player</th><th scope=\"col\">Shots</th><th scope=\"col\">Saves</th><th scope=\"col\">Goals</th></tr></thead><tbody><tr><th scope=\"row\">"+ this.eService.getStatsRL()[0][0][0] +"</th><td>"+ this.eService.getStatsRL()[0][0][1] +"</td><td>"+ this.eService.getStatsRL()[0][0][2] +"</td><td>"+ this.eService.getStatsRL()[0][0][3] +"</td></tr><tr><th scope=\"row\">"+ this.eService.getStatsRL()[0][1][0] +"</th><td>"+ this.eService.getStatsRL()[0][1][1] +"</td><td>"+ this.eService.getStatsRL()[0][1][2] +"</td><td>"+ this.eService.getStatsRL()[0][1][3] +"</td></tr><tr><th scope=\"row\">"+ this.eService.getStatsRL()[0][2][0] +"</th><td>"+ this.eService.getStatsRL()[0][2][1] +"</td><td>"+ this.eService.getStatsRL()[0][2][2] +"</td><td>"+ this.eService.getStatsRL()[0][2][3] +"</td></tr></tbody></table>"
      this.htmlYouWantToAdd += "<br><h5>"+ this.eService.getStatsRL()[3] +"</h5><table class=\"table\"><thead><tr><th scope=\"col\">Player</th><th scope=\"col\">Shots</th><th scope=\"col\">Saves</th><th scope=\"col\">Goals</th></tr></thead><tbody><tr><th scope=\"row\">"+ this.eService.getStatsRL()[1][0][0] +"</th><td>"+ this.eService.getStatsRL()[1][0][1] +"</td><td>"+ this.eService.getStatsRL()[1][0][2] +"</td><td>"+ this.eService.getStatsRL()[1][0][3] +"</td></tr><tr><th scope=\"row\">"+ this.eService.getStatsRL()[1][1][0] +"</th><td>"+ this.eService.getStatsRL()[1][1][1] +"</td><td>"+ this.eService.getStatsRL()[1][1][2] +"</td><td>"+ this.eService.getStatsRL()[1][1][3] +"</td></tr><tr><th scope=\"row\">"+ this.eService.getStatsRL()[1][2][0] +"</th><td>"+ this.eService.getStatsRL()[1][2][1] +"</td><td>"+ this.eService.getStatsRL()[1][2][2] +"</td><td>"+ this.eService.getStatsRL()[1][2][3] +"</td></tr></tbody></table>"
    }
    else if(this.eService.EVENTS[0].game == "Valorant"){
      this.htmlYouWantToAdd = "<table class=\"table\"><thead><tr><th scope=\"col\">Player</th><th scope=\"col\">Shots</th><th scope=\"col\">Saves</th><th scope=\"col\">Goals</th></tr></thead><tbody><tr><th scope=\"row\">"+ this.eService.getStatsRL()[0][0] +"</th><td>"+ this.eService.getStatsRL()[0][1] +"</td><td>"+ this.eService.getStatsRL()[0][2] +"</td><td>"+ this.eService.getStatsRL()[0][3] +"</td></tr><tr><th scope=\"row\">"+ this.eService.getStatsRL()[1][0] +"</th><td>"+ this.eService.getStatsRL()[1][1] +"</td><td>"+ this.eService.getStatsRL()[1][2] +"</td><td>"+ this.eService.getStatsRL()[1][3] +"</td></tr><tr><th scope=\"row\">"+ this.eService.getStatsRL()[2][0] +"</th><td>"+ this.eService.getStatsRL()[2][1] +"</td><td>"+ this.eService.getStatsRL()[2][2] +"</td><td>"+ this.eService.getStatsRL()[2][3] +"</td></tr></tbody></table>"
    }
    else if(this.eService.EVENTS[0].game == "Hockey"){
      this.htmlYouWantToAdd = "<table class=\"table\"><thead><tr><th scope=\"col\">Player</th><th scope=\"col\">Shots</th><th scope=\"col\">Saves</th><th scope=\"col\">Goals</th></tr></thead><tbody><tr><th scope=\"row\">"+ this.eService.getStatsRL()[0][0] +"</th><td>"+ this.eService.getStatsRL()[0][1] +"</td><td>"+ this.eService.getStatsRL()[0][2] +"</td><td>"+ this.eService.getStatsRL()[0][3] +"</td></tr><tr><th scope=\"row\">"+ this.eService.getStatsRL()[1][0] +"</th><td>"+ this.eService.getStatsRL()[1][1] +"</td><td>"+ this.eService.getStatsRL()[1][2] +"</td><td>"+ this.eService.getStatsRL()[1][3] +"</td></tr><tr><th scope=\"row\">"+ this.eService.getStatsRL()[2][0] +"</th><td>"+ this.eService.getStatsRL()[2][1] +"</td><td>"+ this.eService.getStatsRL()[2][2] +"</td><td>"+ this.eService.getStatsRL()[2][3] +"</td></tr></tbody></table>"
    }
    else if(this.eService.EVENTS[0].game == "Basket Ball"){
      this.htmlYouWantToAdd = "<table class=\"table\"><thead><tr><th scope=\"col\">Player</th><th scope=\"col\">Shots</th><th scope=\"col\">Saves</th><th scope=\"col\">Goals</th></tr></thead><tbody><tr><th scope=\"row\">"+ this.eService.getStatsRL()[0][0] +"</th><td>"+ this.eService.getStatsRL()[0][1] +"</td><td>"+ this.eService.getStatsRL()[0][2] +"</td><td>"+ this.eService.getStatsRL()[0][3] +"</td></tr><tr><th scope=\"row\">"+ this.eService.getStatsRL()[1][0] +"</th><td>"+ this.eService.getStatsRL()[1][1] +"</td><td>"+ this.eService.getStatsRL()[1][2] +"</td><td>"+ this.eService.getStatsRL()[1][3] +"</td></tr><tr><th scope=\"row\">"+ this.eService.getStatsRL()[2][0] +"</th><td>"+ this.eService.getStatsRL()[2][1] +"</td><td>"+ this.eService.getStatsRL()[2][2] +"</td><td>"+ this.eService.getStatsRL()[2][3] +"</td></tr></tbody></table>"
    }
  }

  // @Input() shots: number = this.getTotalShots();

  constructor(private eService: EventService) {}

}
