import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionHomeComponent } from './collection-home/collection-home.component';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';

const routes: Routes = [
  {path: '', component: CollectionHomeComponent},
  {path: ':id', component: CharacterSheetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionRoutingModule { }
