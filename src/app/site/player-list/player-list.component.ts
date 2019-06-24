import { Component, OnInit } from '@angular/core';
import { Player } from '../../Models/player';
import { PlayerService } from '../../services/player/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players: Player[];
  constructor(private playerService: PlayerService) {
  }

  update(player : Player) {
    this.playerService.gotoPlayerUpdate(player.id);
    // let playerToUpdate = new Player();
    // this.playerService.get(player.id).subscribe(data => {
    //   playerToUpdate.firstName = "totoUPDATE";
    //   this.playerService.update(playerToUpdate).subscribe(result => window.location.reload());
    // });
  }
  delete(id:number){
    this.playerService.delete(id).subscribe(result => window.location.reload());;
  }

  ngOnInit() {
    this.playerService.findAll().subscribe(data => {
      this.players = data;
    });
  }
}
