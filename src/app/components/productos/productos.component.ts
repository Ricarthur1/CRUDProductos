import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  listProductos: any[] = [];


accion = 'Agregar ';
form: FormGroup;
id: number | undefined;
currentProducto: any;


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
 const localData = localStorage.getItem('listProductos');
 if (localData != null) {
  this.listProductos = JSON.parse(localData);
 } else {
  
 }
 this.listProductos.sort(function (a, b) {
  // A va primero que B
  if (a.id < b.id)
      return -1;
  // B va primero que A
  else if (a.id > b.id )
      return 1;
  // A y B son iguales
  else 
      return 0;
});
}

guardarProducto(){

  const producto: any = {
    id: this.form.get('id')?.value,
    nombre: this.form.get('nombre')?.value,
    descripcion: this.form.get('descripcion')?.value,
    precio: this.form.get('precio')?.value,
    cantidad: this.form.get('cantidad')?.value,
    creado_en: this.form.get('creado_en')?.value
  }

  const currentProducto: any = {
    id: this.form.get('id')?.value,
    nombre: this.form.get('nombre')?.value,
    descripcion: this.form.get('descripcion')?.value,
    precio: this.form.get('precio')?.value,
    cantidad: this.form.get('cantidad')?.value,
    creado_en: this.form.get('creado_en')?.value
  }

    if (this.id == undefined ) {

    if (this.listProductos.some(e => e.id === producto.id)) {
      this.toastr.info('El ID del Producto está en uso', 'Producto repetido!');
    } else {
            //Agrega una nueva tarjeta    
    this.listProductos.push(producto)
    this.toastr.success('El producto se agregó exitosamente', 'Producto agregado!');
    this.form.reset();
    this.listProductos.sort(function (a, b) {
      // A va primero que B
      if (a.id < b.id)
          return -1;
      // B va primero que A
      else if (a.id > b.id )
          return 1;
      // A y B son iguales
      else 
          return 0;
    
  });
}

    } else {
      if (this.listProductos.some(e => e.id === producto.id)) {
        this.toastr.info('El ID del Producto está en uso', 'Producto repetido!');
      }else{
      //Editar tarjeta
      producto.id = this.id
      this.form.reset();
      this.accion = 'Agregar ';
      this.id = undefined;
      const index = this.listProductos.findIndex(p => p.id == producto.id);
      this.listProductos.splice(index, 1)
      this.listProductos.push(currentProducto)
      this.toastr.info('Tarjeta Actualizada!','La tarjeta se actualizó correctamente');
      }
    }
    localStorage.setItem('listProductos', JSON.stringify(this.listProductos));
    this.listProductos.sort(function (a, b) {
      // A va primero que B
      if (a.id < b.id)
          return -1;
      // B va primero que A
      else if (a.id > b.id )
          return 1;
      // A y B son iguales
      else 
          return 0;
  });



}

eliminarProducto(index: number){
  this.listProductos.splice(index, 1);
  this.toastr.error('Producto eliminado','El producto se eliminó exitosamente')
  localStorage.setItem('listProductos', JSON.stringify(this.listProductos));
}

updateProducto(producto: any){
  this.accion= 'Editar ';
  this.id = producto.id
  let currentProducto = this.listProductos.find((producto) => {
    return producto.id === this.id
  })
  console.log(producto);
  this.form.patchValue({
      id: currentProducto.id,
      nombre: currentProducto.nombre,
      descripcion: currentProducto.descripcion,
      precio: currentProducto.precio,
      cantidad: currentProducto.cantidad,
      creado_en: currentProducto.creado_en
  });

}

}