import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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


form: FormGroup;

constructor(private fb: FormBuilder) {
  this.form = this.fb.group({
    id:  [''],
    nombre: [''],
    descripcion: [''],
    precio: [''],
    cantidad:  [''],
    creado_en:  ['']
  })
}
ngOnInit(): void {
}

agregarProducto(){

  const producto: any = {
    id: this.form.get('id')?.value,
    nombre: this.form.get('nombre')?.value,
    descripcion: this.form.get('descripcion')?.value,
    precio: this.form.get('precio')?.value,
    cantidad: this.form.get('cantidad')?.value,
    creado_en: this.form.get('creado_en')?.value,
  }

}



}