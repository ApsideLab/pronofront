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

      let day = this.scale.dateDebutValidite.toString().substring(0,2);
      let month = this.scale.dateDebutValidite.toString().substring(3,5);
      let year = this.scale.dateDebutValidite.toString().substring(6,10);
  
      this.scale.dateDebutValidite = new Date(parseInt(year), parseInt(month)-1, parseInt(day));
  
      day = this.scale.dateFinValidite.toString().substring(0,2);
      month = this.scale.dateFinValidite.toString().substring(3,5);
      year = this.scale.dateFinValidite.toString().substring(6,10);
      this.scale.dateFinValidite = new Date(parseInt(year), parseInt(month) -1, parseInt(day));

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
