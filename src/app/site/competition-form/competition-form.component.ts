import { Component, OnInit } from '@angular/core';
import { Competition } from '../../Models/competition'
import { CompetitionService } from '../../services/competition/competition.service'
import {Location} from '@angular/common';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {DateValidator} from '../../helpers/date.validator';

@Component({
  selector: 'app-competition-form',
  templateUrl: './competition-form.component.html',
  styleUrls: ['./competition-form.component.scss']
})

export class CompetitionFormComponent {

  competition: Competition;

  constructor(private competitionService: CompetitionService, private location: Location, private fb: FormBuilder) { 
    this.competition = new Competition();
  }

  submit() {
    this.competitionService.save(this.competition).subscribe(result => this.competitionService.goToContestList())
  }

  cancel() {
    this.location.back();
  }
}
