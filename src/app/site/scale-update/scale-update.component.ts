import { Component } from '@angular/core';
import { Scale } from '../../Models/scale';
import { ScaleService } from '../../services/scale/scale.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-scale-update',
  templateUrl: './scale-update.component.html',
  styleUrls: ['./scale-update.component.css']
})
export class ScaleUpdateComponent {
  id : number;
  scale: Scale;

  constructor(private scaleService: ScaleService, private route: ActivatedRoute) {
    this.scale = new Scale();
  }

  update(scale : Scale) {
    this.scaleService.get(scale.id).subscribe(data => {
      this.scaleService.update(scale).subscribe(result => window.location.reload());
    });
  }

  onSubmit() {
    this.scaleService.update(this.scale).subscribe(result => this.scaleService.gotoScaleList());
  }
  onCancel() {
    this.scaleService.gotoScaleList();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.scaleService.get(this.id).subscribe(data =>{
        this.scale = data;
      });
    });
  }
}
