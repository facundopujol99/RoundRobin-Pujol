import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TeamsService } from '../teams.service';
import {ListTeamsComponent} from './list-teams/list-teams.component';

@Component({
  selector: 'app-adm-teams',
  templateUrl: './adm-teams.component.html',
  styleUrls: ['./adm-teams.component.scss']
})
export class AdmTeamsComponent implements OnInit {

  constructor(private teamListService : TeamsService) { }

  teams : String[] = this.teamListService.list;
  errorDuplicatedTeam = false;
  errorMaxAmount = false;
  @ViewChild(ListTeamsComponent) listingTeams : ListTeamsComponent;

  ngOnInit(): void {
  }

  newTeam(newTeam : string){
    if(this.teams.length<20){
      if(this.teams.indexOf(newTeam)<0){
        this.teams.push(newTeam);
        this.errorDuplicatedTeam = false;
        this.errorMaxAmount = false;
      }else{
        this.errorDuplicatedTeam = true;
      }
    }else{
      this.errorMaxAmount = true;
    }
  }

  deleteTeam(){
    this.teamListService.deleteTeam(this.listingTeams.teamSelected);
    this.listingTeams.teamSelected = "";
  }

}
