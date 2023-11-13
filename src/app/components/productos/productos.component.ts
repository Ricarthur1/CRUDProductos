import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  listProductos: any[] = [
    { ID: 1, nombre: 'Juguete', descripcion: 'Juguete de pokemon', precio: 299.90, cantidad: 10, creado_en: '10/10/2023 15:30'},
    { ID: 2, nombre: 'Ropa', descripcion: 'Playera de niño', precio: 199.90, cantidad: 20, creado_en: '10/10/2023 15:40'}
  ];
}
