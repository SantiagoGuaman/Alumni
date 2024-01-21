import { Injectable } from '@angular/core';
import { MAIN_ROUTE } from './MAIN_ROUTE';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ofertaLaboral } from '../Models/ofertaLaboral';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfertalaboralService {

  urlEndPoint = MAIN_ROUTE + '/ofertas-laborales';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient) { }

  getOfertasLaborales(): Observable<ofertaLaboral[]> {
    return this.http.get<ofertaLaboral[]>(this.urlEndPoint);
  }

  createOfertaLaboral(oferta: ofertaLaboral): Observable<ofertaLaboral> {
    return this.http.post<ofertaLaboral>(this.urlEndPoint, oferta, { headers: this.httpHeaders })
  }

  getOfertaLaboralById(id: any): Observable<ofertaLaboral> {
    return this.http.get<ofertaLaboral>(`${this.urlEndPoint}/${id}`)
  }
}
