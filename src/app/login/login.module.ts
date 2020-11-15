import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import { AngularMaterialModule } from '../angular-material.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FlexLayoutModule 
  ]
})
export class LoginModule { }
