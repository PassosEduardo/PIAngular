import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import PlayerModel from 'src/app/Models/player.model';
import { PlayerService } from 'src/app/services/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
    newPlayer: PlayerModel = new PlayerModel();

  playerForm?: FormGroup;
  selectedPosition?: string;

  constructor(private PlayerService : PlayerService, private router:Router) {}

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

      console.log(this.newPlayer);


      this.PlayerService.postPlayer(this.newPlayer)

    
      console.log("submitei")

      this.router.navigate(['players']);
    }

}
