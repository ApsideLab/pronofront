import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Competition } from '../../Models/competition';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  
  public addContest() {
    this.router.navigate(['/addcontests']);
  }

  private contestUrl: string;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { 
    this.contestUrl = 'http://localhost:8086/pronos/contests/';
  }
}
