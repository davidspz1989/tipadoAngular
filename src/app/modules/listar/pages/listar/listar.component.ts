import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../../shared/service/usuarios.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  public usuarios:any=[]

  constructor(private readonly usuarioService:UsuariosService){}


  ngOnInit(): void {
    this.usuarioService.cargarUsuarios().subscribe(lista =>{
      this.usuarios=lista
    })
  }



}
