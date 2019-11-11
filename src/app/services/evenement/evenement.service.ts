import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Evenement } from '../../Models/evenement';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class EvenementService {
    private evenementsUrl: string;

    constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
      this.evenementsUrl = 'http://localhost:8086/pronos/evenements/';
    }

    public findAll(): Observable<Evenement[]> {
      return this.http.get<Evenement[]>(this.evenementsUrl);
    }

    public get(id: number): Observable<Evenement> {
      return this.http.get<Evenement>(this.evenementsUrl + id);
    }

    public delete(id: number){
      return this.http.delete(this.evenementsUrl + id);
    }

    public save(evenement: Evenement) {
      return this.http.post<Evenement>(this.evenementsUrl, evenement);
    }

    public update(evenement: Evenement) {
      return this.http.put<Evenement>(this.evenementsUrl, evenement);
    }

    public gotoEvenementList() {
      this.router.navigate(['/evenements']);
    }

    public gotoEvenementUpdate(id) {
      this.router.navigate(['/evenementsUpdate', id]);
    }

    public gotoEvenementSave() {
      this.router.navigate(['/addevenements']);
    }
}
