import { Component, OnInit } from '@angular/core';
import { Competition } from 'src/app/Models/competition';
import { ActivatedRoute } from '@angular/router';
import { CompetitionService } from '../../services/competition/competition.service';
import * as moment from 'moment';

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

  constructor(private competitionService: CompetitionService, private route: ActivatedRoute) { 
    this.competition = new Competition();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.competitionService.get(this.id).subscribe(data =>{
        this.competition = data;
      });
    });
  }

  goToContestUpdate() {
    this.competitionService.goToContestUpdate(this.competition.id);
  }

  goToList() {
    this.competitionService.goToContestList();
  }

  deleteContest() {
    console.log("ok");
  }

}
