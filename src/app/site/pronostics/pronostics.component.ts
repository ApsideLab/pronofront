import { Component, OnInit } from '@angular/core';
import { Evenement } from '../../Models/evenement';
import { EvenementService } from 'src/app/services/evenement/evenement.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pronostics',
  templateUrl: './pronostics.component.html',
  styleUrls: ['./pronostics.component.scss']
})
export class PronosticsComponent implements OnInit {

  evts: Array<Evenement> = new Array<Evenement>();

  constructor(private eventService: EvenementService) {
    this.eventService.findAll().subscribe(res => {
      console.log(res);
      this.evts = res;
    }, err => {
        console.log('Erreur de chargement des évènements')
    }
    );
  }
  ngOnInit() {
  }

testObs() {
  const monObservable = new Observable((observer) => {
    const listOfFriends = ['Damien', 'Thomas', 'Jean-Claude Dusse','Alpha Omega' , 'DMX'];
    listOfFriends.forEach((friend: string) => {
        observer.next(friend);
    })
    observer.complete();
});
}

testtimeOut() {
  setTimeout(function() { console.log(' ****** Salut les copains!  ******');} , 4000);
  const listOfFriends = ['Bara', 'Abdou', 'Fatou'];
}
}
