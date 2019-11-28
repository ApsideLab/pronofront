import { Component, OnInit } from '@angular/core';
import { Evenement } from '../../Models/evenement';
import { CompetitionService } from '../../services/competition/competition.service';
import { TokenStorageService } from '../auth/token-storage.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  info: any;
  evts: Array<Evenement> = new Array<Evenement>();

  constructor(private competitionService: CompetitionService,
              private token: TokenStorageService) {

    // this.eventService.findAll().subscribe(res => {
    //   console.log(res);
    //   this.evts = res;
    // }
    // );


  }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }

  addContest() {
    this.competitionService.addContest();
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }
}
