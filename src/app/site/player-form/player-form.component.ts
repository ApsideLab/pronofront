import { Component } from '@angular/core';
import { Player } from '../../Models/player';
import { PlayerService } from '../../services/player/player.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent {

  player: Player;

  constructor(private playerService: PlayerService) {
    this.player = new Player();
  }

  onSubmit() {
    this.playerService.save(this.player).subscribe(result => this.playerService.gotoPlayerList());
  }
}
