import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError } from 'rxjs';
import { throwError} from 'rxjs';

@Injectable({
  providedIn: 'root',

})
  


export class LivreService {
  private apiUrl = 'http://localhost:3000/api/livres';  
 /* private livres = [
    { id: 1, titre: 'Introduction to Algorithms', auteur: 'Thomas H. Cormen' },
    { id: 2, titre: 'Bases de données : Concepts, utilisation et administration', auteur: 'Philippe Garrigues' },
    { id: 3, titre: 'Conception orientée objet et design patterns', auteur: 'Craig Larman' },
    { id: 4, titre: 'Electronique : Bases et applications', auteur: 'Henri Bouty' },
    { id: 5, titre: 'Électronique numérique : Cours, exercices corrigés et simulations', auteur: 'Michel Roux' },
    { id: 6, titre: 'Initiation aux microcontrôleurs et à l`électronique embarquée', auteur: 'Philippe Watteau' },
    { id: 7, titre: 'Machines électriques : Principes fondamentaux et applications', auteur: 'Pierre Gonet' },
    { id: 8, titre: 'Électricité appliquée : Cours et exercices corrigés', auteur: 'Joseph Delaballe' },
    { id: 9, titre: 'Électrotechnique : Conversion et électronique de puissance', auteur: 'Jean-Pierre Hautier' },
    { id: 10, titre: 'Thermodynamique : Fondements et applications', auteur: 'Michel Feidt' },
    { id: 11, titre: 'Physique statistique : Concepts et applications', auteur: 'Gérard Dautcourt' },
    { id: 12, titre: 'Physique quantique', auteur: 'Bernard Cagnac' },
    { id: 13, titre: 'Mathématiques pour l`informatique', auteur: 'Gilles Dowek' },
    { id: 14, titre: 'Séries de Fourier et applications', auteur: 'Gérard Jouanlanne' },
    { id: 15, titre: 'Calcul matriciel pour les ingénieurs', auteur: 'Claude Grosjean' },
  ];
*/
  constructor(private http: HttpClient){}

  getLivres(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}


