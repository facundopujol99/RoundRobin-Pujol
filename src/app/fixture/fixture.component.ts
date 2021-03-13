import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Match } from 'src/match.model';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.scss']
})
export class FixtureComponent implements OnInit {
  constructor(private teamListService : TeamsService) { }

  teamList: String[] = [];
  fixture: Match[][] = [[], []];
  subscription:Subscription;
  disabledButton = true;
  fixtureDone = false;

  ngOnInit(): void {
    this.subscription = this.teamListService.listObservable
    .subscribe(list =>{
      if(list.length<3||list.length%2!=0){
        this.disabledButton = true;
      }else{
        this.disabledButton = false;
        this.teamList = list;
      }
      });
  }

  askForFixture(){
    this.fixture = this.teamListService.createFixture();
    if(this.fixture!=null&&this.fixture!=[[],[]]){
      this.fixtureDone = true;
    }
  }

}


