
import { Injectable } from '@angular/core';
import PlayerModel from '../Models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playersList: PlayerModel[] = [
    {
      title: "Arrascaeta",
      subtitle: "Giorgian De",
      birthDate: new Date("06-01-1994"),
      nationality: "Uruguay",
      MarketValue: 19,
      image:"https://mundorubronegro.com/wp-content/uploads/2022/10/52455326313_e1efb98988_c.jpeg",
      position: "Meio-Campo"
    },
    
    {
      title: "Gabriel (Gabigol)",
      subtitle: "Barbosa",
      birthDate: new Date("08-30-1996"),
      nationality: "Brasil",
      MarketValue: 22,
      image: "https://inmagazine.com.br/public/assets/img/postagens/post_11422.jpg",
      position: "Atacante"
    },
    {
      title: "Pedro",
      subtitle: "Guilherme",
      birthDate: new Date("06-20-1997"),
      nationality: "Brasil",
      MarketValue: 20,
      image: "https://www.lance.com.br/files/article_main/uploads/2021/06/25/60d6137a6443e.jpeg",
      position: "Atacante"
    }
  ];

  constructor(){}

getPlayers(): PlayerModel[]{
  return this.playersList
}

postPlayer(newPlayer: PlayerModel): void{
  
  this.playersList.push(newPlayer)
}
updatePLayer(){

}
deletePLayer(){

}

}
