import { Component, OnInit, ViewChild } from '@angular/core';
import { Competition } from '../../Models/competition';
import { CompetitionService } from '../../services/competition/competition.service';
import { MatSort, MatTableDataSource, MatSortable } from '@angular/material';
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

  columnNames = [{
    id: "startDate",
    value: "Début"
  },{
    id: "endDate",
    value: "Fin"
  }]

  constructor(private competitionService: CompetitionService, public datepipe: DatePipe) { 
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
    for(let i = 0; i < this.dataSource.data.length; i++) {
      this.dataSource.data[i].startDate = this.datepipe.transform(this.dataSource.data[i].startDate, 'dd/MM/yyyy HH:mm');
      this.dataSource.data[i].endDate = this.datepipe.transform(this.dataSource.data[i].endDate, 'dd/MM/yyyy HH:mm');
    }
  }

}
