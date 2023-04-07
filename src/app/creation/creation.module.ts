import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreationRoutingModule } from './creation-routing.module';
import { CreationFormComponent } from './creation-form/creation-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'


@NgModule({
  declarations: [
    CreationFormComponent
  ],
  imports: [
    CommonModule,
    CreationRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule
  ]
})
export class CreationModule { }
