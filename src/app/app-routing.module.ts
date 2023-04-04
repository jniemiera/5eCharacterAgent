import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {
    path: 'collection',
    loadChildren: () => import('./collection/collection.module').then(m => m.CollectionModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./creation/creation.module').then(m => m.CreationModule)
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
