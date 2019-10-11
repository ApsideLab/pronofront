import { Component, OnInit } from '@angular/core';
import { CompetitionService } from '../../services/competition/competition.service'

@Component({
  selector: 'app-competition-form',
  templateUrl: './competition-form.component.html',
  styleUrls: ['./competition-form.component.sass']
})
export class CompetitionFormComponent implements OnInit {

  constructor(private competitionService: CompetitionService) { }

  ngOnInit() {
  }

}
