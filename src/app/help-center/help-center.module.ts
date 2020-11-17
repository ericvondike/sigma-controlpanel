import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { HelpCenterRoutingModule } from './help-center-routing.module';
import { HelpComponent } from './help/help.component';


@NgModule({
  declarations: [HelpComponent],
  imports: [
    CommonModule,
    SharedModule,
    HelpCenterRoutingModule
  ]
})
export class HelpCenterModule { }
