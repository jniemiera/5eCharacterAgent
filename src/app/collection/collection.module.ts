import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionRoutingModule } from './collection-routing.module';
import { CollectionHomeComponent } from './collection-home/collection-home.component';
import { CharacterService } from '../rest';
import { CollectionElementComponent } from './collection-home/collection-element/collection-element.component';


@NgModule({
  declarations: [
    CollectionHomeComponent,
    CollectionElementComponent,
  ],
  imports: [
    CommonModule,
    CollectionRoutingModule
  ]
})
export class CollectionModule { }
