import { PlayerService } from './../../services/player.service';
import  PlayerModel  from 'src/app/Models/player.model';
import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  // @Input() player?:PlayerModel; 
  static player?: PlayerModel
  
  constructor(public dialogRef: MatDialogRef<DialogComponent>,private PlayerService: PlayerService)
  {  
  }

  cancel() {
    this.dialogRef.close();
  }
  deletePlayer(){
    this.dialogRef.close();
    if (DialogComponent.player) this.PlayerService.deletePlayer(DialogComponent.player.id)
    window.location.reload();
  }

}
