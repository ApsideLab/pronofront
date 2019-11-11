import { Component, OnInit } from '@angular/core';
import { Actor } from '../../Models/actor';
import { ActorService } from '../../services/actor/actor.service';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {

  actors: Actor[];
  constructor(private actorService: ActorService, public dialog: MatDialog) {
  }

  update(actor: Actor) {
    this.actorService.gotoActorUpdate(actor.id);
  }

  save() {
    this.actorService.gotoActorSave();
  }

  delete(id: number){
    this.actorService.delete(id).subscribe(result => window.location.reload());
  }

  confirmDialog(id: number) {
      const message = `Êtes-vous sur de vouloir supprimer cette équipe ?`;
      const dialogData = new ConfirmDialogModel('Confirmer l\'action', message);

      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        maxWidth: "400px",
        data: dialogData
      });

      dialogRef.afterClosed().subscribe(dialogResult => {
        if (dialogResult) {
          this.delete(id);
        }
      });
    }

  ngOnInit() {
    this.actorService.findAll().subscribe(data => {
      this.actors = data;
    });
  }
}
