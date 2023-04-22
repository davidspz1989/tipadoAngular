import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './pages/registro/registro.component';
import { RegistrarRoutingModule } from './registrar-routing.module';



@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    CommonModule,
    RegistrarRoutingModule
  ]
})
export class RegistrarModule { }
