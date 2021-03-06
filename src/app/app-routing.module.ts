import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

/** Imports routing modules */
import { LandingRoutingModule } from './landing/landing-routing.module';
import { DetailRoutingModule } from './detail/detail-routing.module';
import { HelpCenterRoutingModule } from './help-center/help-center-routing.module';
import { SigmaSettingsRoutingModule } from './sigma-settings/sigma-settings-routing.module';

import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules
    }),
    LandingRoutingModule,
    DetailRoutingModule,
    HelpCenterRoutingModule,
    SigmaSettingsRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
