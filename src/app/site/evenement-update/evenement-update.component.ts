import { Component } from '@angular/core';
import { Evenement } from '../../Models/evenement';
import { EvenementService } from '../../services/evenement/evenement.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-evenement-update',
  templateUrl: './evenement-update.component.html',
  styleUrls: ['./evenement-update.component.css']
})
export class EvenementUpdateComponent {
  id : number;
  evenement: Evenement;

  constructor(private evenementService: EvenementService, private route: ActivatedRoute) {
    this.evenement = new Evenement();
  }

  update(evenement : Evenement) {
    this.evenementService.get(evenement.id).subscribe(data => {
      this.evenementService.update(evenement).subscribe(result => window.location.reload());
    });
  }

  onSubmit() {
    this.evenementService.update(this.evenement).subscribe(result => this.evenementService.gotoEvenementList());
  }

  onCancel() {
    this.evenementService.gotoEvenementList();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.evenementService.get(this.id).subscribe(data =>{
        this.evenement = data;
      });
    });
  }
}
