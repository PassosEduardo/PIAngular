import { MatDialog } from '@angular/material/dialog';
import { Component,Input } from '@angular/core';
import PlayerModel from 'src/app/Models/player.model';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { PlayerService } from 'src/app/services/player.service';


  @Component({
    selector: 'app-players',
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.css']
  })
  export class PlayersComponent {
    @Input() player?:PlayerModel; 

      constructor(private deleteDialog: MatDialog, private PlayerService: PlayerService){}


      openDialog(): void {      
        const dialogRef = this.deleteDialog.open(DialogComponent, {
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log(DialogComponent);   
        });
      
    }

    deleteItem(){
      DialogComponent.player = this.player;
      this.openDialog()
      // if(result == true){
      //   if (this.player)
      //   {
      //     this.PlayerService.deletePlayer(this.player.id)
      //     window.location.reload()
      //   } 
      // }     
    }


  }

