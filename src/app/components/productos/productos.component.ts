import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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

constructor(private fb: FormBuilder,
  private toastr: ToastrService) {
  this.form = this.fb.group({
    id:  ['', Validators.required],
    nombre: ['', [Validators.required, Validators.maxLength(50)]],
    descripcion: ['', Validators.required],
    precio: ['', Validators.required],
    cantidad:  ['', [Validators.required, Validators.min(1)]],
    creado_en:  ['', Validators.required]
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
  this.listProductos.push(producto)
  this.toastr.success('Producto Agregado!', 'El producto se agregó exitosamente');
  this.form.reset();

}

eliminarProducto(index: number){
  this.listProductos.splice(index, 1);
  this.toastr.error('Procuto eliminado','El producto se eliminó exitosamente')
}



}