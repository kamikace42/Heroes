import {Hero} from './hero';
import {Input, Component,  OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: 'hero-detail.component.html'
})
export class HeroDetailComponent{

    @Input()
    hero: Hero;
}
