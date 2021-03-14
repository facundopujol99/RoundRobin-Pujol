import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TeamsService } from 'src/app/teams.service';


@Component({
  selector: 'app-form-teams',
  templateUrl: './form-teams.component.html',
  styleUrls: ['./form-teams.component.scss']
})
export class FormTeamsComponent implements OnInit {
  teamList = this.teamListService.list;
  inputNameValue = "";
  @Output() newTeamEvent = new EventEmitter<string>();
  @Output() deleteTeamEvent = new EventEmitter();

  @Input() errorDuplicatedTeam;
  @Input() errorMaxAmount;



  constructor(private formBuilder: FormBuilder, private teamListService : TeamsService) { }

  ngOnInit(): void { }

  AddTeamForm=this.formBuilder.group({"teamName":["",[ Validators.required,this.teamListService.validateName.bind(this.teamListService)]]})

  addNewTeam(teamName : string){
    this.teamListService.newTeam(teamName);
  }

  deleteTeam(){
    this.deleteTeamEvent.emit();
  }
}



