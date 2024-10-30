// areas.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent {
  areaForm: FormGroup;
  
  // Definimos el tipo de datos en el array areas
  areas: {
    codigo: number;
    nombre: string;
    lider: number;
    estado: boolean;
  }[] = [];  // Esto asegura que el array contenga solo objetos con esta estructura.

  constructor(private fb: FormBuilder) {
    this.areaForm = this.fb.group({
      codigo: ['', [Validators.required, Validators.maxLength(2)]],
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      lider: ['', [Validators.required, Validators.maxLength(7)]],
      estado: [true]
    });
  }

  agregarArea() {
    // Agrega el área desde el formulario al array areas
    this.areas.push(this.areaForm.value);
    this.areaForm.reset();
  }
}


