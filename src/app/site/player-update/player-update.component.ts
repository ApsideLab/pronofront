import { Component } from '@angular/core';
import { Player } from '../../Models/player';
import { PlayerService } from '../../services/player/player.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-player-update',
  templateUrl: './player-update.component.html',
  styleUrls: ['./player-update.component.css']
})
export class PlayerUpdateComponent {
  id : number;
  player: Player;

  constructor(private playerService: PlayerService, private route: ActivatedRoute) {
    this.player = new Player();
  }

  update(player : Player) {
    this.playerService.get(player.id).subscribe(data => {
      this.playerService.update(player).subscribe(result => window.location.reload());
    });
  }

  onSubmit() {
    this.playerService.update(this.player).subscribe(result => this.playerService.gotoPlayerList());
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.playerService.get(this.id).subscribe(result =>{
        this.player = result;
      });
    });
  }
}
