export interface Usuario {
    id?: number; 
    nombres: string;
    apellidos: string;
    fechaNacimiento: Date;
    email: string;
    numeroDocumento: number;
    area: number;
    salario: number;
    estado: 'Activo' | 'Inactivo';
    imagen?: string;
    

  }
  