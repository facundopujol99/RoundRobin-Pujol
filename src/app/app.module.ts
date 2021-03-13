import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmTeamsComponent } from './adm-teams/adm-teams.component';
import { FormTeamsComponent } from './adm-teams/form-teams/form-teams.component';
import { ListTeamsComponent } from './adm-teams/list-teams/list-teams.component';
import { FixtureComponent } from './fixture/fixture.component';

@NgModule({
  declarations: [
    AppComponent,
    AdmTeamsComponent,
    FormTeamsComponent,
    ListTeamsComponent,
    FixtureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
