import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivreService } from './services/livre.service';
import { AbonneService } from './services/abonne.service';
import { PretService } from './services/pret.service';
import { LivreListComponent } from './components/livre/livre-list/livre-list.component';
import { AbonneListComponent } from './components/abonne/abonne-list/abonne-list.component';
import { PretListComponent } from './components/pret/pret-list/pret-list.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    LivreListComponent,
    AbonneListComponent, 
    PretListComponent,
    CommonModule
  ],
})

export class AppComponent {
  
  livres: any[] = [];
  abonnes: any[] = [];
  prets: any[] = [];
  

  constructor(
    private livreService: LivreService,
    private abonneService: AbonneService,
    private pretService: PretService
  ) {}

  ngOnInit() {
    this.livreService.getLivres().subscribe((data) => {
      this.livres = data;
      console.log(this.livres);
    });

    this.abonneService.getAbonnes().subscribe((data) => {
      this.abonnes = data;
      console.log(this.abonnes);
    });

    this.pretService.getPrets().subscribe((data) => {
      this.prets = data;
      console.log(this.prets)
    });
  }

  showLivres: boolean = false;
  showAbonnes: boolean = false;
  showPrets: boolean = false;

  toggleLivres() : void{
    this.showLivres = !this.showLivres;
  }

  toggleAbonnes() : void{
    this.showAbonnes = !this.showAbonnes;
  }

  togglePrets() : void{
    this.showPrets = !this.showPrets;
  }
}
