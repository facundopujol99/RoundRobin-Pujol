import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { TeamsService } from 'src/app/teams.service';

@Component({
  selector: 'app-list-teams',
  templateUrl: './list-teams.component.html',
  styleUrls: ['./list-teams.component.scss']
})
export class ListTeamsComponent implements OnInit {
  teamList : String[];
  subscription:Subscription;
  @Output() deleteTeamEvent = new EventEmitter<string>();
  teamSelected;
  constructor(private teamListService :TeamsService) { }

  ngOnInit(): void {
    this.subscription = this.teamListService.listObservable
       .subscribe(list => this.teamList = list)
  }

  onSelect(selection){
    this.teamSelected = selection;
  }
}
