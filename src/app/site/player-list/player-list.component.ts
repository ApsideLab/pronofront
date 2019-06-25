import { Component, OnInit } from '@angular/core';
import { Player } from '../../Models/player';
import { PlayerService } from '../../services/player/player.service';
import { ConfirmationDialogService } from './../confirmation-window/confirmation-window.service';

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
