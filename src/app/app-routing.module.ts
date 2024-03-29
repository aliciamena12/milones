import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  { path: 'dashboard', component: ContainerComponent },
  { path: 'game/:name', component: GameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
