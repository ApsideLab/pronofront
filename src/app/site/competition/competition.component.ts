import { Component, OnInit } from '@angular/core';
import { Competition } from 'src/app/Models/competition';
import { ActivatedRoute, Router } from '@angular/router';
import { CompetitionService } from '../../services/competition/competition.service';
import * as moment from 'moment';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss']
})
export class CompetitionComponent implements OnInit {
  id: number;
  competition: Competition;
  startDay: String;
  startTime: String;
  endDay: String;
  endTime: String;
  error: any;

  constructor(private competitionService: CompetitionService, private route: ActivatedRoute, public dialog: MatDialog, private router: Router) { 
    this.competition = new Competition();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = + params['id'];
      this.competitionService.get(this.id).subscribe(data =>{
        this.competition = data;
      }, error => {
        if(error.status == 404) {
          this.router.navigate(['/404']);
        }
      });
    });
  }

  goToContestUpdate() {
    this.competitionService.goToContestUpdate(this.competition.id);
  }

  goToList() {
    this.competitionService.goToContestList();
  }

  openDialog() {
    const message = `Êtes-vous sûr de vouloir supprimer cette compétition ?`;
    const dialogData = new ConfirmDialogModel("Confirmer l'action", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if(dialogResult){
        this.delete(this.competition.id);
      }
    });
  }

  delete(id:number){
    this.competitionService.delete(id).subscribe({
      error: err => this.error = err.error.message,
      complete: () => this.competitionService.goToContestList()
    })
  }

}
