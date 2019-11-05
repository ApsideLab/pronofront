import { Component, OnInit } from '@angular/core';
import { CompetitionService } from 'src/app/services/competition/competition.service';
import { Competition } from 'src/app/Models/competition';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-competition-update',
  templateUrl: './competition-update.component.html',
  styleUrls: ['./competition-update.component.scss']
})
export class CompetitionUpdateComponent implements OnInit {
  id : number;
  contest: Competition;

  constructor(private competitionService: CompetitionService, private route: ActivatedRoute) { 
    this.contest = new Competition();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.competitionService.get(this.id).subscribe(data =>{
        this.contest = data;
      });
    });
  }

}
