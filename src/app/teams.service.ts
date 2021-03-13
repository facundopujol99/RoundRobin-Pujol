import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Match } from 'src/match.model';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor() { }
  list : String[] = ["Danubio","Penarol","Nacional","River","Defensor","Progreso"];

  listUpdate = new BehaviorSubject<String[]>(this.list);

  listObservable = this.listUpdate.asObservable();

  newTeam(newTeam : string){
    if(this.list.length<20){
      if(this.list.indexOf(newTeam)<0){
        this.list.push(newTeam);
      }else{
       return -1;
      }
    }else{
      return -2;
    }
    this.listUpdate.next(this.list);
    return 0;
  }

  deleteTeam(selection){
    this.list = this.list.filter((name)=>{return name!=selection});
    this.listUpdate.next(this.list);
  }

  createFixture() {
    let fixture = [[], []];
    let rounds = this.list.length - 1;
    let matchesPerRound = this.list.length / 2;
    fixture = new Array(rounds)
      .fill({ local: 0, visitor: 0 })
      .map(() => new Array(matchesPerRound)
        .fill({ local: 0, visitor: 0 }));
    for (let i = 0, k = 0; i < rounds; i++) {
      for (let j = 0; j < matchesPerRound; j++) {
        fixture[i][j] = new Match();
        fixture[i][j].local = k;
        k++;
        if (k == rounds)
          k = 0;
      }
    }
    for (let i = 0; i < rounds; i++) {
      if (i % 2 == 0) {
        fixture[i][0].visitor = this.list.length - 1;
      }
      else {
        fixture[i][0].visitor = fixture[i][0].local;
        fixture[i][0].local = this.list.length - 1;
      }
    }
    let highestTeam = this.list.length - 1;
    let highestOddTeam = highestTeam - 1;
    for (let i = 0, k = highestOddTeam; i < rounds; i++) {
      for (let j = 1; j < matchesPerRound; j++) {
        fixture[i][j].visitor = k;
        k--;
        if (k == -1)
          k = highestOddTeam;
      }
    }
    return fixture;
  }
}

