import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail.component';

const routes: Routes = [
  {
    path: 'detail',
    component: DetailComponent
  },
  {
    path: 'home',
    loadChildren: () => import('../landing/landing.module').then(m => m.LandingModule)
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailRoutingModule {}
