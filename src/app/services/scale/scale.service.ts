import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Scale } from '../../Models/scale';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class ScaleService {
    private scalesUrl: string;

    constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
      this.scalesUrl = 'http://localhost:8086/pronos/scales/';
    }

    public findAll(): Observable<Scale[]> {
      return this.http.get<Scale[]>(this.scalesUrl);
    }

    public get(id:number): Observable<Scale>{
      return this.http.get<Scale>(this.scalesUrl+id);
    }

    public delete(id:number){
      return this.http.delete(this.scalesUrl+id);
    }

    public save(scale: Scale) {
      return this.http.post<Scale>(this.scalesUrl, scale);
    }

    public update(scale: Scale) {
      return this.http.put<Scale>(this.scalesUrl, scale);
    }

    public gotoScaleList() {
      this.router.navigate(['/scales']);
    }

    public gotoScaleUpdate(id) {
      this.router.navigate(['/scalesUpdate', id]);
    }

    public gotoScaleSave() {
      this.router.navigate(['/addscales']);
    }

}
