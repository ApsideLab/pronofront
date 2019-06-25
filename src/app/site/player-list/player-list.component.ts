import { Component, OnInit } from '@angular/core';
import { Player } from '../../Models/player';
import { PlayerService } from '../../services/player/player.service';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players: Player[];
  constructor(private playerService: PlayerService, public dialog: MatDialog) {
  }

  update(player : Player) {
    this.playerService.gotoPlayerUpdate(player.id);
  }

  delete(id:number){
    this.playerService.delete(id).subscribe(result => window.location.reload());
  }

  confirmDialog(id:number) {
      const message = `Êtes-vous sur de vouloir supprimer cet utilisateur?`;
      const dialogData = new ConfirmDialogModel("Confirmer l'action", message);

      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        maxWidth: "400px",
        data: dialogData
      });

      dialogRef.afterClosed().subscribe(dialogResult => {
        if(dialogResult){
          this.delete(id);
        }
      });
    }

  ngOnInit() {
    this.playerService.findAll().subscribe(data => {
      this.players = data;
    });
  }
}
