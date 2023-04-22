import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './pages/listar/listar.component';
import { ListarRoutingModule } from './listar-routing.module';



@NgModule({
  declarations: [
    ListarComponent
  ],
  imports: [
    CommonModule,
    ListarRoutingModule
  ]
})
export class ListarModule { }
