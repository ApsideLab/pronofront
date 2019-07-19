import { Component } from '@angular/core';
import { Scale } from '../../Models/scale';
import { ScaleService } from '../../services/scale/scale.service';

@Component({
  selector: 'app-scale-form',
  templateUrl: './scale-form.component.html',
  styleUrls: ['./scale-form.component.css']
})
export class ScaleFormComponent {

  scale: Scale;

  constructor(private scaleService: ScaleService) {
    this.scale = new Scale();
  }

  onSubmit() {
    let day = this.scale.dateDebutValidite.toString().substring(0,2);
    let month = this.scale.dateDebutValidite.toString().substring(3,5);
    let year = this.scale.dateDebutValidite.toString().substring(6,10);

    this.scale.dateDebutValidite = new Date(parseInt(year), parseInt(month) -1, parseInt(day));

    day = this.scale.dateFinValidite.toString().substring(0,2);
    month = this.scale.dateFinValidite.toString().substring(3,5);
    year = this.scale.dateFinValidite.toString().substring(6,10);
    this.scale.dateFinValidite = new Date(parseInt(year), parseInt(month) -1, parseInt(day));
    this.scaleService.save(this.scale).subscribe(result => this.scaleService.gotoScaleList());
  }
}
