import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AngularMaterialModule } from '../angular-material.module';

import { LandingRoutingModule } from './landing-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [HomeComponent, DashboardComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    LandingRoutingModule,
    SharedModule
  ]
})
export class LandingModule { }
