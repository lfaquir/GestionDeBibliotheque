import { Component } from '@angular/core';
import {NgFor} from '@angular/common';
import { PretService } from '../../../services/pret.service';
import { AbonneService } from '../../../services/abonne.service';
import { LivreService } from '../../../services/livre.service';

@Component({
  selector: 'app-pret-list',
  templateUrl: './pret-list.component.html',
  styleUrls: ['./pret-list.component.css'],
  imports:[NgFor]
})
export class PretListComponent {
  //prets: { id: number; livre_Id: number; abonneId: number }[] = [];
  prets: any[] = [];
  livres: any[] = [];
  abonnes: any[] = [];

  livreId: number = 0;
  abonneId: number = 0;

  constructor(
    private pretService: PretService,
    private livreService: LivreService,
    private abonneService: AbonneService) {
  }

  ngOnInit(): void {
    this.pretService.getPrets().subscribe((data) => {
      this.prets = data;
    });

    this.livreService.getLivres().subscribe((data) => {
      this.livres = data;
    });

    this.abonneService.getAbonnes().subscribe((data) => {
      this.abonnes = data;
    });
  }

  mettreAJourLivreId(event: Event) {
    const input = event.target as HTMLSelectElement;
    this.livreId = Number(input.value);
  }

  mettreAJourAbonneId(event: Event) {
    const input = event.target as HTMLSelectElement;
    this.abonneId = Number(input.value);
  }

  ajouterPret() {
    // Vérification des valeurs
    if (this.livreId <= 0 || this.abonneId <= 0) {
      alert('Veuillez sélectionner un livre et un abonné.');
      return;
    }
  
    // Objet prêt à ajouter
    const pret = { livreId: this.livreId, abonneId: this.abonneId };
  
    // Appel API pour ajouter le prêt
    this.pretService.addPret(pret).subscribe({
      next: (response) => {
        alert('Prêt ajouté avec succès !');
  
        // Mise à jour locale pour éviter un appel API supplémentaire
        this.prets.push(response);
  
        // Réinitialisation des sélections
        this.livreId = 0;
        this.abonneId = 0;
      },
      error: (err) => {
        console.error('Erreur lors de l\'ajout du prêt:', err);
        alert('Une erreur est survenue lors de l\'ajout du prêt.');
      }
    });
  }
  
}
