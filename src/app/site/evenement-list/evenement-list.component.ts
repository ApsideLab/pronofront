import { Component, OnInit } from '@angular/core';
import { Evenement } from '../../Models/evenement';
import { EvenementService } from '../../services/evenement/evenement.service';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-evenement-list',
  templateUrl: './evenement-list.component.html',
  styleUrls: ['./evenement-list.component.css']
})
export class EvenementListComponent implements OnInit {

  evenements: Evenement[];
  constructor(private evenementService: EvenementService, public dialog: MatDialog) {
  }

  update(evenement : Evenement) {
    this.evenementService.gotoEvenementUpdate(evenement.id);
  }

  save() {
    this.evenementService.gotoEvenementSave();
  }

  delete(id:number){
    this.evenementService.delete(id).subscribe(result => window.location.reload());
  }

  confirmDialog(id:number) {
      const message = `Êtes-vous sur de vouloir supprimer cette équipe ?`;
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
    this.evenementService.findAll().subscribe(data => {
      this.evenements = data;
    });
  }
}
