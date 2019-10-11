import { Component, OnInit } from '@angular/core';
import { CompetitionService } from '../../services/competition/competition.service'
import {Location} from '@angular/common';

@Component({
  selector: 'app-competition-form',
  templateUrl: './competition-form.component.html',
  styleUrls: ['./competition-form.component.scss']
})
export class CompetitionFormComponent implements OnInit {

  constructor(private competitionService: CompetitionService, private location: Location) { }

  ngOnInit() {
  }

  cancel() {
    this.location.back();
  }

}
