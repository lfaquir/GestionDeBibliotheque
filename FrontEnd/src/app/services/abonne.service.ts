import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import { catchError } from 'rxjs';
import { throwError} from 'rxjs';

interface Abonne {
  id: number;
  nom: string;
}

@Injectable({
  providedIn: 'root',
})
export class AbonneService {
  /*private abonnes: Abonne[] = [
    { id: 1, nom: 'Lfaquir Anwar' },
    { id: 2, nom: 'Fassi Kawtar' },
    { id: 3, nom: 'Bouali Arinas' },
    { id: 4, nom: 'Tifa Meryem' },
    { id: 5, nom: 'Essafi Jaouad' }
  ];*/
  private apiUrl = 'http://localhost:3000/api/abonnes';

  constructor(private http: HttpClient){}

  getAbonnes(): Observable<Abonne[]> {
return this.http.get<Abonne[]>(this.apiUrl);
  }

  /*getAbonnes(): Abonne[] {
    return this.abonnes;
  }*/

  addAbonne(abonne: Abonne): Observable<Abonne> {
    return this.http.post<Abonne>(this.apiUrl, abonne);
  }
  
  /*addAbonne(abonne: Abonne) {
    this.abonnes.push(abonne);
  }*/
}


