import { MatDialog } from '@angular/material/dialog';
import { Component,Input, TemplateRef, ViewChild } from '@angular/core';
import PlayerModel from 'src/app/Models/player.model';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { PlayerService } from 'src/app/services/player.service';
import { EditDialogComponent } from 'src/app/shared/edit-dialog/edit-dialog.component';


  @Component({
    selector: 'app-players',
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.css']
  })
  export class PlayersComponent {
    @Input() player?:PlayerModel;
    @ViewChild('dialogTemplate') dialogTemplate?: TemplateRef<any>;

      constructor(private deleteDialog: MatDialog, private PlayerService: PlayerService,private editDialog: MatDialog){}


      openDeleteDialog(): void {      
        DialogComponent.player = this.player
        const dialogRef = this.deleteDialog.open(DialogComponent, {
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log(DialogComponent);   
        });
      }

        openEditDialog() {
          if(this.player) EditDialogComponent.player = this.player
          this.editDialog.open(EditDialogComponent, {
              data: { title: "Atualizar Jogador" }
            });
        }
      
    }

