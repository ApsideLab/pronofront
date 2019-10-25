import { Component, OnInit } from '@angular/core';
import { Evenement } from '../../Models/evenement';
import { EvenementService } from 'src/app/services/evenement/evenement.service';
import { Competition } from '../../Models/competition';
import { CompetitionService } from '../../services/competition/competition.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  evts: Array<Evenement> = new Array<Evenement>();
  constructor(private eventService: EvenementService, private competitionService: CompetitionService) {
    this.eventService.findAll().subscribe(res => {
      console.log(res);
      this.evts = res;
    }

    );
  }

  ngOnInit() {
  }

  addContest() {
    this.competitionService.addContest();
  }
}
