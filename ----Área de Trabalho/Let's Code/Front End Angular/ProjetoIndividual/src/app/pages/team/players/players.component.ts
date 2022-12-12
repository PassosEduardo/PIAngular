import { Component,Input } from '@angular/core';
import PlayerModel from 'src/app/Models/player.model';
import { SharedModule } from 'src/app/shared/shared.module';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {
  @Input() player?:PlayerModel; 
  // ={

  //   title:"N especificado",
  //   professor: "N definido",
  //   dataInicio: new Date(),
  //   dataTermino: new Date(),
  //   status: false
  // }
  constructor(){}

}
