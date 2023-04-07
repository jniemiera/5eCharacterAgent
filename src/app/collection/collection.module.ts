import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionRoutingModule } from './collection-routing.module';
import { CollectionHomeComponent } from './collection-home/collection-home.component';
import { CollectionElementComponent } from './collection-home/collection-element/collection-element.component';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { MatButton, MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    CollectionHomeComponent,
    CollectionElementComponent,
    CharacterSheetComponent
  ],
  imports: [
    CommonModule,
    CollectionRoutingModule,
    FontAwesomeModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class CollectionModule { }
