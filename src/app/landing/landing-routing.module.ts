import { NgModule } from '@angular/core';


import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from '../detail/detail.component';
import { HelpComponent } from '../help-center/help/help.component';
import { AddressComponent } from '../sigma-settings/address/address.component';
import { LanguagesComponent } from '../sigma-settings/languages/languages.component';
import { AppSettingsComponent } from './app-settings/app-settings.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
        data: { title: 'anms.menu.about' }
      },
      {
        path: 'detail',
        component: DetailComponent
      },
      {
        path: 'help',
        component: HelpComponent
      },
      {
        path: 'address',
        component: AddressComponent
      },
      {
        path: 'language',
        component: LanguagesComponent
      },
      {
        path: 'settings',
        component: AppSettingsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
