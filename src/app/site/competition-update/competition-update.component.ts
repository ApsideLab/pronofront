import { Component, OnInit } from '@angular/core';
import { CompetitionService } from 'src/app/services/competition/competition.service';
import { Competition } from 'src/app/Models/competition';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { validDates } from '../validators/valid-dates.validator';

@Component({
  selector: 'app-competition-update',
  templateUrl: './competition-update.component.html',
  styleUrls: ['./competition-update.component.scss']
})
export class CompetitionUpdateComponent implements OnInit {
  id : number;
  contest: Competition;
  fixedStartDate: String;
  fixedEndDate: String;
  competitionForm: FormGroup;
  error: any;

  constructor(private competitionService: CompetitionService, private location: Location, private route: ActivatedRoute, private fb: FormBuilder) { 
    this.contest = new Competition();
    this.contest = new Competition();
    this.competitionForm = this.fb.group({
      label: new FormControl(),
      startDate: new FormControl(),
      endDate: new FormControl(),
    }, {
      validator: validDates('startDate', 'endDate')
    });
  }

  private bindToModel(): void {
    this.contest.label = this.competitionForm.get('label').value;
    this.contest.startDate = this.competitionForm.get('startDate').value;
    this.contest.endDate = this.competitionForm.get('endDate').value;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.competitionService.get(this.id).subscribe(data =>{
        this.contest = data;
        this.fixedStartDate = this.contest.startDate.toString().replace(/ /g, "T").slice(0,16);
        this.fixedEndDate = this.contest.endDate.toString().replace(/ /g, "T").slice(0,16);
        this.competitionForm.get('label').setValue(this.contest.label);
        this.competitionForm.get('startDate').setValue(this.fixedStartDate);
        this.competitionForm.get('endDate').setValue(this.fixedEndDate);
      });
    });
    console.log(this.competitionForm);
  }

  submit() {
    this.bindToModel();
    console.log(this.contest)
    this.competitionService.update(this.contest).subscribe({
      error: err => this.error = err.error.message,
      complete: () => this.competitionService.goToContestList()
    })
  }

  cancel() {
    this.location.back();
  }

}
