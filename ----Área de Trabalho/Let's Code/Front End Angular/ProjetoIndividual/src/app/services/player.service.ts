
import { Injectable } from '@angular/core';
import PlayerModel from '../Models/player.model';
import { StorageService } from './storage.service';

const defaultPlayerListKey = 'PLayerList';
const deafultPlayerList = [
  {
  id: 1,
  title: "Arrascaeta",
  subtitle: "Giorgian De",
  birthDate: new Date("06-01-1994"),
  nationality: "Uruguay",
  MarketValue: 19,
  image:"https://mundorubronegro.com/wp-content/uploads/2022/10/52455326313_e1efb98988_c.jpeg",
  position: "Meio-Campo"
},

{
  id: 2,
  title: "Gabriel (Gabigol)",
  subtitle: "Barbosa",
  birthDate: new Date("08-30-1996"),
  nationality: "Brasil",
  MarketValue: 22,
  image: "https://inmagazine.com.br/public/assets/img/postagens/post_11422.jpg",
  position: "Atacante"
},
{
  id: 3,
  title: "Pedro",
  subtitle: "Guilherme",
  birthDate: new Date("06-20-1997"),
  nationality: "Brasil",
  MarketValue: 20,
  image: "https://www.lance.com.br/files/article_main/uploads/2021/06/25/60d6137a6443e.jpeg",
  position: "Atacante"
},
{
  id: 4,
  title: "Everton",
  subtitle: "Ribeiro",
  birthDate: new Date("04-10-1989"),
  nationality: "Brasil",
  MarketValue: 4,
  image: "https://s2.glbimg.com/YiRMOIdOhiecErdWtjhzk3vcmy8=/0x0:3000x1997/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/3/p/lgfh7KQxCySONfkiT0Nw/agif22101923211628.jpg",
  position: "Meio-Campo"

},
{
  id: 5,
  title: "Filipe",
  subtitle: "Luis",
  birthDate: new Date("08-09-1985"),
  nationality: "Brasil",
  MarketValue: 0.5,
  image: "https://colunadofla.com/wp-content/uploads/2022/08/filipe-luis-flamengo-corinthians-1280x720.jpg",
  position: "Lateral"

},
{
  id: 6,
  title: "Everton",
  subtitle: "Cebolinha",
  birthDate: new Date("03-22-1996"),
  nationality: "Brasil",
  MarketValue: 20,
  image: "https://www.lance.com.br/files/article_content/uploads/2022/07/20/62d8a93c95b52.jpeg",
  position: "Atacante"

},
] 

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  // otherPlayerList :PlayerModel[]; 
  playersList: PlayerModel[]; 

  constructor(private storageService: StorageService){

    if(localStorage.getItem(defaultPlayerListKey) === null)
    {
      this.playersList = deafultPlayerList;
      storageService.set(defaultPlayerListKey,this.playersList)
    }
    else
    {
      this.playersList = storageService.get(defaultPlayerListKey);
    }
  }


getPlayers(): PlayerModel[]{
  return this.playersList
}

postPlayer(newPlayer: PlayerModel): void{
  
  this.playersList.push(newPlayer)
  this.storageService.set(defaultPlayerListKey,this.playersList)
}
updatePlayer(id: number, updatedPlayer: PlayerModel){
  const index = this.playersList.findIndex((player) => player.id == id);
  this.playersList[index] = updatedPlayer
  this.storageService.set(defaultPlayerListKey,this.playersList)
}
deletePlayer(id: number) {

  this.playersList = this.storageService.get(defaultPlayerListKey)
  const index = this.playersList.findIndex((player)=> player.id == id);
  this.playersList.splice(index, 1);
  this.storageService.set(defaultPlayerListKey, this.playersList)

}

}
