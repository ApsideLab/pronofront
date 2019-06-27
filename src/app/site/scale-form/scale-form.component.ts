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
    this.scaleService.save(this.scale).subscribe(result => this.scaleService.gotoScaleList());
  }
}
