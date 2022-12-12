import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team/team.component';
import { PlayersComponent } from './team/players/players.component';
import { SharedModule } from '../shared/shared.module';
import { AddComponent } from './add/add.component';




@NgModule({
  declarations: [
    TeamComponent,
    PlayersComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PlayersComponent,
    TeamComponent
  ]
})
export class PagesModule { }
