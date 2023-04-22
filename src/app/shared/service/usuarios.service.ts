import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ReqrespoResponse, Usuario } from '../../core/model/index';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url:string
  
  constructor(private readonly http:HttpClient) {
    this.url="https://reqres.in/api/users"
   }

   cargarUsuarios(){
    return this.http.get<ReqrespoResponse>(this.url)
      .pipe(
        map( resp =>{
          return resp.data.map(user => Usuario.usuarioDeJson(user))
        })
      )
   }
}
