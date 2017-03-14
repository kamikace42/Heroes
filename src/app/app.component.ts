import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { Component, OnInit } from '@angular/core';
import { HeroService } from "./hero.service";

/**
* Hero
*/
/*export class Hero {
  id: number;
  name: string;
};*/

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
console.log(HeroService);
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [HeroService]
})


export class AppComponent implements OnInit {
  title = 'Test angular 2';

  /*  hero: Hero = {
      id: 1,
      name: 'Thor'
    };*/

  heroes: Hero[];

  selectedHero: Hero;

  onSelectHero(hero: Hero) {
    this.selectedHero = hero;
    console.log(this);
  }
  constructor(
    private heroService: HeroService
  ) {
    // this.heroes = this._heroService.getHeroes();
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  ngOnInit() {
    this.getHeroes();
   }

};
