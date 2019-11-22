import { Component, OnInit } from '@angular/core';
import { Scale } from 'src/app/Models/scale';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ScaleService } from 'src/app/services/scale/scale.service';
import { CompetitionService } from 'src/app/services/competition/competition.service'
import {Location} from '@angular/common';

@Component({
  selector: 'app-scale-form',
  templateUrl: './scale-form.component.html',
  styleUrls: ['./scale-form.component.scss']
})
export class ScaleFormComponent implements OnInit {

  scale: Scale;
  scaleForm: FormGroup;
  error: any;
  contestId: number

  constructor(private scaleService: ScaleService, private contestService: CompetitionService, private location: Location, private fb: FormBuilder) {
    this.scale = new Scale();
    this.scaleForm = this.fb.group({
      label: new FormControl(),
      ptsBonResultat: new FormControl(),
      ptsNbButs: new FormControl(),
      ptsVainqueurFinal: new FormControl(),
      ptsPatator: new FormControl(),
      ptsPunchingball: new FormControl(),
    });
  }

  private bindToModel():void {
    this.scale.label = this.scaleForm.get('label').value;
    this.scale.ptsBonResultat = this.scaleForm.get('ptsBonResultat').value;
    this.scale.ptsNbButs = this.scaleForm.get('ptsNbButs').value;
    this.scale.ptsVainqueurFinal = this.scaleForm.get('ptsVainqueurFinal').value;
    this.scale.ptsPatator = this.scaleForm.get('ptsPatator').value;
    this.scale.ptsPunchingball = this.scaleForm.get('ptsPunchingball').value;
    this.scale.contestId = this.contestId;
  }

  submit() {
    this.bindToModel();
    this.scaleService.save(this.scale).subscribe({
      error: err => this.error = err.error.message,
      complete: () => this.contestService.goToContestDetails(this.contestId)
    })
  }

  ngOnInit() {
    this.contestId = history.state.contestId; //id du contest
    console.log(this.contestId);
  }

  cancel() {
    this.location.back();
  }

}
