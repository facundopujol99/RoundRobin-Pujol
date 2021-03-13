import { Component, ViewChild } from '@angular/core';
import {AdmTeamsComponent} from './adm-teams/adm-teams.component';
import {FixtureComponent} from './fixture/fixture.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OneForAll';
  @ViewChild(AdmTeamsComponent) admTeams : AdmTeamsComponent;
  @ViewChild(FixtureComponent) fixtureComponent : FixtureComponent;

  setTeams(){
    if(this.admTeams.teams.length<4){
      this.fixtureComponent.fixtureDone = false;
    }else if(this.admTeams.teams.length%2!=0){
      this.fixtureComponent.fixtureDone = false;
    }else{
      this.fixtureComponent.fixtureDone = true;
    }

  }
}
