import { Component, OnInit } from '@angular/core';
import { Scale } from '../../Models/scale';
import { ScaleService } from '../../services/scale/scale.service';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-scale-list',
  templateUrl: './scale-list.component.html',
  styleUrls: ['./scale-list.component.css']
})
export class ScaleListComponent implements OnInit {

  scales: Scale[];
  constructor(private scaleService: ScaleService, public dialog: MatDialog) {
  }

  update(scale : Scale) {
    this.scaleService.gotoScaleUpdate(scale.id);
  }

  save() {
    this.scaleService.gotoScaleSave();
  }

  delete(id:number){
    this.scaleService.delete(id).subscribe(result => window.location.reload());
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
    this.scaleService.findAll().subscribe(data => {
      this.scales = data;
    });
  }
}
