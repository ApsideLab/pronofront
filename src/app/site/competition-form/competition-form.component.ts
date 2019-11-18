import { Component, OnInit } from '@angular/core';
import { Competition } from '../../Models/competition'
import { CompetitionService } from '../../services/competition/competition.service'
import {Location} from '@angular/common';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';
import { validDates } from '../helpers/valid-dates.validator';
import { Toast, ToasterService, ToasterConfig } from 'angular2-toaster';
import { Router } from '@angular/router';

@Component({
  selector: 'app-competition-form',
  templateUrl: './competition-form.component.html',
  styleUrls: ['./competition-form.component.scss']
})

export class CompetitionFormComponent {

  competition: Competition;
  competitionForm: FormGroup;
  error: any;

  public config: ToasterConfig = new ToasterConfig({
    animation: 'fade',
    positionClass: 'toast-bottom-left'
  });

  constructor(private competitionService: CompetitionService,
              private location: Location,
              private fb: FormBuilder,
              private toasterService: ToasterService,
              private router: Router) {
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
      error: err => this.showError(err.error.message),
      complete: () => this.navigateListContestsAndMessageSuccess()
    })
  }

  cancel() {
    this.location.back();
  }

  navigateListContestsAndMessageSuccess() {
    this.router.navigate(['/contests']).then(() => {
      this.showSuccess();
    })
  }

  showError(message) {
    const toast: Toast = {
      type: 'error',
      title: 'Erreur',
      body: message,
    };
    this.toasterService.pop(toast);
  }

  showSuccess() {
    const toast: Toast = {
      type: 'success',
      body: 'La compétition a été crée',
    };
    this.toasterService.popAsync(toast);
  }
}
