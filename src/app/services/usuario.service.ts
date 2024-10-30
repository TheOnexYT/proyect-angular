import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarios: Usuario[] = [];
  private nextId = 1;

  constructor(private http: HttpClient) {}

  getUsuarios(): Usuario[] {
    return this.usuarios;
  }

  agregarUsuario(usuario: Usuario): void {
    usuario.id = this.nextId++;
    this.usuarios.push(usuario);
  }

  editarUsuario(index: number, usuario: Usuario): void {
    this.usuarios[index] = usuario;
  }

  eliminarUsuario(index: number): void {
    this.usuarios.splice(index, 1);
  }

  obtenerUsuarioAleatorio(): Observable<any> {
    return this.http.get('https://randomuser.me/api/');
  }
}
