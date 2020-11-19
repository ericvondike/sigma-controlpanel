import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Imports components */
import { AddressComponent } from './address/address.component';
import { LanguagesComponent } from './languages/languages.component';

const routes: Routes = [
  {
    path: 'address',
    component: AddressComponent,
  },
  {
    path: 'language',
    component: LanguagesComponent
  },
  {
    path: 'home',
    loadChildren: () => import('../landing/landing.module').then(m => m.LandingModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SigmaSettingsRoutingModule { }
