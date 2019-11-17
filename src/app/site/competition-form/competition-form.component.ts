import { Component, OnInit } from '@angular/core';
import { Competition } from '../../Models/competition'
import { CompetitionService } from '../../services/competition/competition.service'
import {Location} from '@angular/common';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';
import { validDates } from '../helpers/valid-dates.validator';

@Component({
  selector: 'app-competition-form',
  templateUrl: './competition-form.component.html',
  styleUrls: ['./competition-form.component.scss']
})

export class CompetitionFormComponent {

  competition: Competition;
  competitionForm: FormGroup;
  error: any;

  constructor(private competitionService: CompetitionService, private location: Location, private fb: FormBuilder) { 
    this.competition = new Competition();
    this.competitionForm = this.fb.group({
      label: new FormControl(),
      startDate: new FormControl(),
      endDate: new FormControl(),
    }, {
      validator: validDates('startDate', 'endDate')
    });
    
  }

  private bindToModel(): void {
    this.competition.label = this.competitionForm.get('label').value;
    this.competition.startDate = this.competitionForm.get('startDate').value;
    this.competition.endDate = this.competitionForm.get('endDate').value;
  }

  submit() {
    this.bindToModel();
    this.competitionService.save(this.competition).subscribe({
      error: err => this.error = err.error.message,
      complete: () => this.competitionService.goToContestList()
    })
  }

  cancel() {
    this.location.back();
  }
}
