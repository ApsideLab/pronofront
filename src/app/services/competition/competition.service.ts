import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Competition } from '../../Models/competition';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  private contestUrl: string;
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    // this.contestUrl = 'http://localhost:8086/pronos/contests/';
  }

  public findAll(): Observable<Competition[]> {
    let url = this.baseUrl + '/contests/';
    return this.http.get<Competition[]>(url);
  }

  public addContest() {
    this.router.navigate(['/addcontests']);
  }

  public get(id:number): Observable<Competition>{
    let url = this.baseUrl + '/contests/' + id;
    return this.http.get<Competition>(url);
  }

  public save(contest:Competition) {
    let url = this.baseUrl + '/contests/';
    return this.http.post<Competition>(url, contest)
  }

  public goToContestList() {
    this.router.navigate(['/contests'])
  }

  public goToHome() {
    this.router.navigate(['/'])
  }
}
