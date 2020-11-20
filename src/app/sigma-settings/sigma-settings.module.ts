import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Imports Modules */
import { SigmaSettingsRoutingModule } from './sigma-settings-routing.module';
import { AngularMaterialModule } from '../angular-material.module';


import { AddressComponent } from './address/address.component';
import { LanguagesComponent } from './languages/languages.component';


@NgModule({
  declarations: [AddressComponent, LanguagesComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    SigmaSettingsRoutingModule
  ]
})
export class SigmaSettingsModule { }
