import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeuComponenteComponent } from './meu-componente/meu-componente.component';

const routes: Routes = [
  { path:"index", component:MeuComponenteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
