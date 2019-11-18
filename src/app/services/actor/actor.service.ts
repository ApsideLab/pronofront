import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Actor } from '../../Models/actor';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})

export class ActorService {
    private actorsUrl: string;
    private baseUrl = environment.baseUrl;

    constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

    public findAll(): Observable<Actor[]> {
      const url = this.baseUrl + '/actors/';
      return this.http.get<Actor[]>(url);
    }

    public get(id:number): Observable<Actor>{
      const url = this.baseUrl + '/actors/' + id;
      return this.http.get<Actor>(url);
    }

    public delete(id:number){
      const url = this.baseUrl + '/actors/' + id;
      return this.http.delete(url);
    }

    public save(actor: Actor) {
      const url = this.baseUrl + '/actors/';
      return this.http.post<Actor>(url, actor);
    }

    public update(actor: Actor) {
      const url = this.baseUrl + '/actors/';
      return this.http.put<Actor>(url, actor);
    }

    public gotoActorList() {
      this.router.navigate(['/actors']);
    }

    public gotoActorUpdate(id) {
      this.router.navigate(['/actorsUpdate', id]);
    }

    public gotoActorSave() {
      this.router.navigate(['/addactors']);
    }
}
