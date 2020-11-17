import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/** Imports components */
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  {
    path: 'help',
    component: HelpComponent,
  },
  {
    path: 'home',
    loadChildren: () => import('../landing/landing.module').then(m => m.LandingModule)
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpCenterRoutingModule { }
