import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Player } from '../../Models/player';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class PlayerService {
    private playersUrl: string;

    constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
      this.playersUrl = 'http://localhost:8086/pronos/players/';
    }

    public findAll(): Observable<Player[]> {
      return this.http.get<Player[]>(this.playersUrl);
    }

    public get(id:number): Observable<Player>{
      return this.http.get<Player>(this.playersUrl+id);
    }
    
    public delete(id:number){
      return this.http.delete(this.playersUrl+id);
    }

    public save(player: Player) {
      player.subscribeDate = new Date();
      return this.http.post<Player>(this.playersUrl, player);
    }

    public update(player: Player) {
      return this.http.put<Player>(this.playersUrl, player);
    }

    public gotoPlayerList() {
      this.router.navigate(['/players']);
    }

    public gotoPlayerUpdate(id) {
      this.router.navigate(['/playersUpdate', id]);
    }

    public gotoPlayerSave() {
      this.router.navigate(['/addplayers']);
    }

}
