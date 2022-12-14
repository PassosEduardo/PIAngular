import { PlayerService } from './../../services/player.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import PlayerModel from 'src/app/Models/player.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit, OnChanges {

  playersList: PlayerModel[] = [];
constructor(private PlayerService : PlayerService) {}

  ngOnInit(): void {
    this.playersList = this.PlayerService.getPlayers();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.playersList = this.PlayerService.getPlayers();
  }

}
