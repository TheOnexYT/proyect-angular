import { Injectable } from '@angular/core';
import { Area } from '../models/area.model';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  private areas: Area[] = [];
  private nextId = 1;

  getAreas(): Area[] {
    return this.areas;
  }

  agregarArea(area: Area): void {
    area.id = this.nextId++;
    this.areas.push(area);
  }

  editarArea(index: number, area: Area): void {
    this.areas[index] = area;
  }

  eliminarArea(index: number): void {
    this.areas.splice(index, 1);
  }
}

