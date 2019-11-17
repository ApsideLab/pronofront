import { Component, OnInit, ViewChild } from '@angular/core';
import { Competition } from '../../Models/competition';
import { CompetitionService } from '../../services/competition/competition.service';
import { ToasterConfig, ToasterService, Toast } from 'angular2-toaster';
import { MatSort, MatTableDataSource, MatSortable, MatPaginator } from '@angular/material';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.scss']
})
export class CompetitionListComponent implements OnInit {

  contests: Competition[];
  dataSource;
  displayedColumns = [];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public config: ToasterConfig = new ToasterConfig({
    animation: 'fade',
    positionClass: 'toast-bottom-left'
  });
  constructor(private toasterService: ToasterService, private competitionService: CompetitionService, public datepipe: DatePipe) {
    this.dataSource = new MatTableDataSource()
  }

  columnNames = [{
    id: "startDate",
    value: "Début"
  },{
    id: "endDate",
    value: "Fin"
  }]

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

  goToContestDetails(contestId: number) {
    this.competitionService.goToContestDetails(contestId)
  }

  showError() {
    const toast: Toast = {
      type: 'error',
      title: 'Erreur',
      body: 'Identifiant ou mot de passe incorrect',
    };
    this.toasterService.pop(toast);
  }

}
