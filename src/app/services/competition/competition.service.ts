import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Competition } from '../../Models/competition';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  private contestsUrl: string;
  private contestUrl: string;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { 
    this.contestsUrl = 'http://localhost:8086/pronos/contests/';
    this.contestUrl = 'http://localhost:8086/pronos/contest/';
  }
  
  public findAll(): Observable<Competition[]> {
    return this.http.get<Competition[]>(this.contestsUrl);
  }

  public addContest() {
    this.router.navigate(['/addcontests']);
  }

  public get(id:number): Observable<Competition>{
    return this.http.get<Competition>(this.contestUrl+id);
  }

  public save(contest:Competition) {
    return this.http.post<Competition>(this.contestsUrl, contest)
  }

  public update(contest:Competition) {
    return this.http.put<Competition>(this.contestsUrl, contest);
  }

  public delete(id:number){
    return this.http.delete(this.contestsUrl+id);
  }

  public goToContestList() {
    this.router.navigate(['/contests'])
  }

  public goToHome() {
    this.router.navigate(['/'])
  }

  goToContestDetails(contestId: number) {
    this.router.navigate(['contest/'+contestId])
  }

  goToContestUpdate(id: number) {
    this.router.navigate(['updateContest/'+id])
  }
}
