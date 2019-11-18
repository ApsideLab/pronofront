import { Component, OnInit, ViewChild } from '@angular/core';
import { Competition } from '../../Models/competition';
import { CompetitionService } from '../../services/competition/competition.service';
import { ToasterConfig, ToasterService, Toast } from 'angular2-toaster';
import { MatSort, MatTableDataSource, MatSortable, MatPaginator, MatDialog } from '@angular/material';
import { DatePipe } from '@angular/common';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { AlertModel, AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.scss']
})
export class CompetitionListComponent implements OnInit {


  public config: ToasterConfig = new ToasterConfig({
    animation: 'fade',
    positionClass: 'toast-bottom-left'
  });

  contests: Competition[];
  dataSource;
  displayedColumns = [];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  columnNames = [{
    id: "startDate",
    value: "Début"
  },{
    id: "endDate",
    value: "Fin"
  }]
  error: any;

  constructor(private competitionService: CompetitionService, public datepipe: DatePipe, public dialog: MatDialog) { 
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.competitionService.findAll().subscribe(data => {
      this.contests = data;
      this.displayedColumns = this.columnNames.map(x => x.id);
      this.displayedColumns.splice(0, 0, 'label')
      this.displayedColumns.push('admin');
      this.createTable();
    });
  }

  createTable() {
    this.dataSource = new MatTableDataSource(this.contests);
    this.sort.sort(({id: 'startDate', start: 'asc'}) as MatSortable);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    for(let i = 0; i < this.dataSource.data.length; i++) {
      this.dataSource.data[i].startDate = this.datepipe.transform(this.dataSource.data[i].startDate, 'dd/MM/yyyy HH:mm');
      this.dataSource.data[i].endDate = this.datepipe.transform(this.dataSource.data[i].endDate, 'dd/MM/yyyy HH:mm');
    }
  }

  goToContestUpdate(contestId: number) {
    this.competitionService.goToContestUpdate(contestId);
  }

  goToContestDetails(contestId: number) {
    this.competitionService.goToContestDetails(contestId);
  }

  openDialog(contestId: number) {
    const message = `Êtes-vous sûr de vouloir supprimer cette compétition ?`;
    const dialogData = new ConfirmDialogModel("Confirmer l'action", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if(dialogResult){
        this.delete(contestId);
      }
    });
  }

  alert() {
    const message = this.error;
    const dialogData = new AlertModel("Erreur", message);

    const dialogRef = this.dialog.open(AlertComponent, {
      maxWidth: "400px",
      data: dialogData
    });
  }

  delete(id:number){
    this.competitionService.delete(id).subscribe({
      error: err => {
        this.error = err.error.message;
        this.alert();
      },
      complete: () => window.location.reload()
    })
  }

}
