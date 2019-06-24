import { Component, OnInit } from '@angular/core';
import { Evenement } from 'src/app/interface/evenement';
import { EvenementsService } from 'src/app/services/evenements/evenements.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  evts: Array<Evenement> = new Array<Evenement>();
  constructor(private eventService: EvenementsService) {
    this.eventService.getAll().subscribe(res => {
      console.log(res);
      this.evts = res;
    }

    );
  }

  ngOnInit() {
  }

}
