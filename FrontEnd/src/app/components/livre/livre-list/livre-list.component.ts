import { Component, OnInit, Input } from '@angular/core';
import { LivreService } from '../../../services/livre.service';
import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface Livre {
  id: number;
  titre: string;
  auteur: string;
}

@Component({
  selector: 'app-livre-list',
  templateUrl: './livre-list.component.html',
  styleUrls: ['./livre-list.component.css'],
  imports:[NgFor, HttpClientModule]
})
export class LivreListComponent implements OnInit {
  /*@Input() livres: Livre[] = [];*/
  livres: any[] = [];

  constructor(private livreService: LivreService) {}

  ngOnInit(): void {
    //this.livres = this.livreService.getLivres();
    this.livreService.getLivres().subscribe((data) => {
      this.livres = data;
      console.log(this.livres);
    });
  }
}


