import { Component, Inject } from '@angular/core';
import PlayerModel from 'src/app/Models/player.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlayerFormComponent } from '../player-form/player-form.component';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent {
  
  static player: PlayerModel
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string }) {

  }

}


