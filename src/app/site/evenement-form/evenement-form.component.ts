import { Component } from '@angular/core';
import { Evenement } from '../../Models/evenement';
import { EvenementService } from '../../services/evenement/evenement.service';

@Component({
  selector: 'app-evenement-form',
  templateUrl: './evenement-form.component.html',
  styleUrls: ['./evenement-form.component.css']
})
export class EvenementFormComponent {

  evenement: Evenement;

  constructor(private evenementService: EvenementService) {
    this.evenement = new Evenement();
  }

  onSubmit() {
    this.evenementService.save(this.evenement).subscribe(result => this.evenementService.gotoEvenementList());
  }
}
