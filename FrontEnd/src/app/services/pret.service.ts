import { Injectable } from '@angular/core';
import { LivreService } from './livre.service';
import { AbonneService } from './abonne.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PretService {
  private apiUrl = 'http://localhost:3000/api/prets';

  constructor(private http: HttpClient){}

  getPrets(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Méthode pour ajouter un nouveau prêt
  addPret(pret: { livreId: number, abonneId: number }): Observable<any> {
    return this.http.post<any>(this.apiUrl, pret);
  }

  //private prets: { id: number; livreId: number; abonneId: number }[] = [];

  /*constructor(
    private livreService: LivreService,
    private abonneService: AbonneService
  ) {
    this.genererPrets();
  }

  private genererPrets(): void {
    const livres = this.livreService.getLivres();
    const abonnes = this.abonneService.getAbonnes();

    const nbPrets = Math.min(livres.length, abonnes.length); // Le nombre de prêts sera limité au plus petit ensemble.

    this.prets = Array.from({ length: nbPrets }, (_, index) => ({
      id: index + 1,
      livreId: livres[index].id,
      abonneId: abonnes[index].id,
    }));
  }

  getPrets(): { id: number; livreId: number; abonneId: number }[] {
    return this.prets;
  }

  addPret(pret: { id: number; livreId: number; abonneId: number }) {
    this.prets.push(pret);
  }*/
}





