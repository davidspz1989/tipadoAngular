import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"listar",
    loadChildren:()=>import(`../listar/listar.module`).then(m=>m.ListarModule),
    pathMatch:"full"
  },
  {
    path:"registrar",
    loadChildren:()=>import(`../registrar/registrar.module`).then(m=>m.RegistrarModule),
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
