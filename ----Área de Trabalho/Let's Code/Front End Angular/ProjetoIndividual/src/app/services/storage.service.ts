import  PlayerModel  from 'src/app/Models/player.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

    public storage: Storage;

  constructor() { 

    this.storage = window.localStorage
  }

  set(key: string, value: any) {
  this.storage.setItem(key, JSON.stringify(value));
  }

  get(key: string): any {
    if (this.storage) {
    
      return JSON.parse(this.storage.getItem(key) || '{}'); 
    }
    return null;
  }

  remove(key: string): boolean {
    if (this.storage) {
      this.storage.removeItem(key);
      return true;
    }
    return false;
  }


}


