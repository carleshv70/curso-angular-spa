import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from 'src/app/services/Heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes:Heroe[] = [];
  termino:string;

  constructor(private activateRoute: ActivatedRoute,
              private _heroeService: HeroesService
    ) { 
  
  }

  ngOnInit() {
    this.activateRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this._heroeService.buscarHeroes(this.termino);
    });
  }

}
