import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreationRoutingModule } from './creation-routing.module';
import { CreationFormComponent } from './creation-form/creation-form.component';


@NgModule({
  declarations: [
    CreationFormComponent
  ],
  imports: [
    CommonModule,
    CreationRoutingModule
  ]
})
export class CreationModule { }
