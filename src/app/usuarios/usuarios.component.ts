import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario.model'; 

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  usuarioForm: FormGroup;
  editIndex: number | null = null;

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService) {
    this.usuarioForm = this.formBuilder.group({
      nombres: ['', [Validators.required, Validators.maxLength(50)]],
      apellidos: ['', [Validators.required, Validators.maxLength(50)]],
      fechaNacimiento: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      numeroDocumento: ['', [Validators.required, Validators.maxLength(7)]],
      area: ['', Validators.required],
      salario: ['', [Validators.required, Validators.min(0)]],
      estado: ['Activo'], 
      imagen: ['']  
    });
  }

  ngOnInit(): void {
    this.usuarios = this.usuarioService.getUsuarios();
  }

  agregarUsuario(): void {
    if (this.usuarioForm.valid) {
      const usuario: Usuario = this.usuarioForm.value;
      this.usuarioService.obtenerUsuarioAleatorio().subscribe(data => {
        const randomUser = data.results[0];
        usuario.imagen = randomUser.picture.large;
        this.usuarioService.agregarUsuario(usuario);
        this.usuarios = this.usuarioService.getUsuarios();
        this.usuarioForm.reset({ estado: 'Activo' });
      });
    }
  }

  editarUsuario(index: number): void {
    this.editIndex = index;
    this.usuarioForm.patchValue(this.usuarios[index]);
  }

  actualizarUsuario(): void {
    if (this.editIndex !== null && this.usuarioForm.valid) {
      this.usuarioService.editarUsuario(this.editIndex, this.usuarioForm.value);
      this.usuarios = this.usuarioService.getUsuarios();
      this.editIndex = null;
      this.usuarioForm.reset({ estado: 'Activo' });
    }
  }

  eliminarUsuario(index: number): void {
    this.usuarioService.eliminarUsuario(index);
    this.usuarios = this.usuarioService.getUsuarios();
  }
}


