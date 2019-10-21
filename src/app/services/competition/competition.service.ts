import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Competition } from '../../Models/competition';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  private contestUrl: string;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { 
    this.contestUrl = 'http://localhost:8086/pronos/contests/';
  }
  
  public findAll(): Observable<Competition[]> {
    return this.http.get<Competition[]>(this.contestUrl);
  }

  public addContest() {
    this.router.navigate(['/addcontests']);
  }

  public get(id:number): Observable<Competition>{
    return this.http.get<Competition>(this.contestUrl+id);
  }

  public save(contest:Competition) {
    return this.http.post<Competition>(this.contestUrl, contest)
  }

  public goToContestList() {
    this.router.navigate(['/contests'])
  }

  public goToHome() {
    this.router.navigate(['/'])
  }
}
