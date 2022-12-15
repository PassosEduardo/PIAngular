import { EditDialogComponent } from 'src/app/shared/edit-dialog/edit-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import PlayerModel from 'src/app/Models/player.model';
import { PlayerService } from 'src/app/services/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent {
  newPlayer: PlayerModel = new PlayerModel();

  playerForm?: FormGroup;
  selectedPosition?: string;

  constructor(private PlayerService : PlayerService, private router:Router, dialog : MatDialog) {}

  ngOnInit() {
    this.playerForm = new FormGroup({
      title: new FormControl(this.newPlayer?.title),
      MarketValue: new FormControl(this.newPlayer.MarketValue),
      birthDate: new FormControl(this.newPlayer.birthDate),
      subtitle: new FormControl(this.newPlayer.subtitle),
      nationality: new FormControl(this.newPlayer.nationality),
      image: new FormControl(this.newPlayer.image),
      position: new FormControl(this.newPlayer.position)
    })};


    //Falta acertar isto!
    onSubmitForm(event: any){

      this.playerForm?.patchValue({
        title: this.playerForm?.controls['title'].value,
        subtitle: this.playerForm?.controls['subtitle'].value,
        birthDate: new Date(this.playerForm?.controls['birthDate'].value),
        MarketValue: this.playerForm?.controls['MarketValue'].value,
        nationality: this.playerForm?.controls['nationality'].value,
        image: this.playerForm?.controls['image'].value,
        position: this.playerForm?.controls['position'].value,
    
      })

  
      this.newPlayer = this.playerForm?.value;
      this.newPlayer.id = EditDialogComponent.player.id
      
      this.PlayerService.updatePlayer(EditDialogComponent.player.id,this.newPlayer);

    
      console.log("submitei")

      this.router.navigate(['players']);
    }

}
