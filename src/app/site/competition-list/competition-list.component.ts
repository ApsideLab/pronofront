import { Component, OnInit } from '@angular/core';
import { Competition } from '../../Models/competition';
import { CompetitionService } from '../../services/competition/competition.service';

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.sass']
})
export class CompetitionListComponent implements OnInit {

  competitions: Competition[];
  constructor(private competitionService: CompetitionService) { }

  ngOnInit() {
    this.competitionService.findAll().subscribe(data => {
      this.competitions = data;
    });
  }

}
