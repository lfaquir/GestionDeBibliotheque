import { Component, OnInit } from '@angular/core';
import { AbonneService } from '../../../services/abonne.service';
import { NgFor } from '@angular/common';

interface Abonne {
  id: number;
  nom: string;
}

@Component({
  selector: 'app-abonne-list',
  templateUrl: './abonne-list.component.html',
  styleUrls: ['./abonne-list.component.css'],
  imports:[NgFor]
})

export class AbonneListComponent implements OnInit {

  abonnes: Abonne[] = [];
  nom: string = '';

 //abonnes: { id: number; nom: string }[] = []; // Liste des abonnés
  //nom: string = ''; // Champ lié au formulaire

  constructor(private abonneService: AbonneService) {}

  ngOnInit(): void {
    this.loadAbonnes();
    // Récupérer les abonnés via le service
    //this.abonnes = this.abonneService.getAbonnes();
  }

  loadAbonnes(): void {
    this.abonneService.getAbonnes().subscribe((data) => {
      this.abonnes = data;
    });
  }

  // Méthode pour ajouter un abonné
  ajouterAbonne(nom: string): void {
    /*if (nom.trim() !== ' ') {
      const id = this.abonnes.length + 1;
      this.abonnes.push({ id, nom: this.nom });
      this.nom = ''; // Réinitialise le champ*/
      if (this.nom.trim() !== '') {
        const newAbonne = { id: 0, nom: this.nom }; // L'ID sera généré par le backend.
        this.abonneService.addAbonne(newAbonne).subscribe((abonne) => {
          this.abonnes.push(abonne);
          this.nom = '';
        });
    } else {
      alert('Le champ nom est vide.');
    }
  }
  mettreAJourNom(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.nom = input.value; // Met à jour la propriété nom
  }
}

