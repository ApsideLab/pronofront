import { Component, OnInit, ViewChild } from '@angular/core';
import { Competition } from 'src/app/Models/competition';
import { ActivatedRoute, Router } from '@angular/router';
import { CompetitionService } from '../../services/competition/competition.service';
import { UsersService } from '../../services/users/users.service';
import * as moment from 'moment';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog, MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Scale } from 'src/app/Models/scale';
import { ScaleService } from 'src/app/services/scale/scale.service';
import { User } from 'src/app/Models/user';
import { TokenStorageService } from '../auth/token-storage.service';

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
  panelOpenState = false;
  user: any;

  scales: Scale[];
  dataSource;
  displayedColumns = [];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  columnNames = [{
    id: "ptsBonResultat",
    value: "Points en cas de bon résultat"
  },{
    id: "ptsNbButs",
    value: "Points pour le nb de buts exact d'une équipe"
  },{
    id: "ptsPunchingball",
    value: "Points pour le punching ball"
  },{
    id: "ptsPatator",
    value: "Points pour le patator"
  },{
    id: "ptsVainqueurFinal",
    value: "Points pour le vainqueur final"
  }]


  constructor(private token: TokenStorageService, private competitionService: CompetitionService, private scaleService: ScaleService, private route: ActivatedRoute, public dialog: MatDialog, private router: Router) { 
    this.competition = new Competition();
    this.dataSource = new MatTableDataSource();
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

    this.user = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };

    this.competitionService.findAllScalesByContest(this.id).subscribe(data => {
      this.scales = data;
      this.displayedColumns = this.columnNames.map(x => x.id);
      this.displayedColumns.splice(0, 0, 'label');
      this.displayedColumns.push('admin');
      this.createTable();
    });
  }

  createTable() {
    this.dataSource = new MatTableDataSource(this.scales);
    this.dataSource.paginator = this.paginator;
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

  consoleLog(scaleId: number) {
    console.log(scaleId);
    console.log(this.scales);
  }

}
