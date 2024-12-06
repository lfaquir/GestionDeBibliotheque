import { Component, OnInit } from '@angular/core';
import { LivreService } from '../../../services/livre.service';

@Component({
  selector: 'app-livre-list',
  templateUrl: './livre-list.component.html',
  styleUrls: ['./livre-list.component.css'],
})
export class LivreListComponent implements OnInit {
  livres: { id: number; titre: string; auteur: string }[] = [];

  constructor(private livreService: LivreService) {}

  async ngOnInit() {
    // Récupérer les livres depuis le backend
    //this.livres = await this.livreService.getLivres();
    this.livreService.getLivres().subscribe((data) => {
      this.livres = data;
    });
  }
}

