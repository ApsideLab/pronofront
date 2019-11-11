import { Component, OnInit } from '@angular/core';
import { Competition } from '../../Models/competition';
import { CompetitionService } from '../../services/competition/competition.service';
import { ToasterConfig, ToasterService, Toast } from 'angular2-toaster';

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.sass']
})
export class CompetitionListComponent implements OnInit {

  public config: ToasterConfig = new ToasterConfig({
    animation: 'fade',
    positionClass: 'toast-bottom-left'
  });

  competitions: Competition[];
  constructor(private toasterService: ToasterService, private competitionService: CompetitionService) { }

  ngOnInit() {
  }

  showError() {
    const toast: Toast = {
      type: 'error',
      title: 'Erreur',
      body: 'Identifiant ou mot de passe incorrect',
    };
    this.toasterService.pop(toast);
  }

}
