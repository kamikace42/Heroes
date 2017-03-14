import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'menu',
  template: `
  <a routerLink="/heroes">Heroes</a>
  <a routerLink="/heroes">Heroes</a>
    <router-outlet></router-outlet>
    `
})
export class MenuComponent { }
