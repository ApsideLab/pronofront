import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evenement } from 'src/app/interface/evenement';


@Injectable({
  providedIn: 'root'
})
export class EvenementsService {
  url: string = "http://localhost:80806/pronos/evenements/";
  constructor(private http: HttpClient) { }
  getAll():Observable<Evenement[]> {
    return this.http.get<Array<Evenement>>(this.url);
  }
}
