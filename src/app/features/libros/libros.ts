import { Component, inject, signal } from '@angular/core';
import { LibroService } from '../../services/libro-service';
import { Libro } from '../../model/libro';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-libros',
  imports: [FormsModule, RouterLink],
  templateUrl: './libros.html',
  styleUrl: './libros.css',
})
export class Libros {
  private servicioLibro = inject(LibroService);
    
    listaLibros = signal<Libro[]>([]);
  
    nuevoLibro:Libro={
      titulo:'',
      numeroPaginas:0,
      editorial:''
    };
    
    ngOnInit(){
      this.obtenerLibros();
    }
  
    //Método obtenerUsuarios
    obtenerLibros(){
      this.servicioLibro.getLibros().subscribe(datosLibros=>{
        this.listaLibros.set(datosLibros)
      });
    }
  
    //Método eliminarUsuario
    eliminarLibro(id:number){
        this.servicioLibro.deleteLibro(id).subscribe(()=>{
          this.obtenerLibros();
        })
      }
    
  seleccionarParaEditar(book:Libro){
    this.nuevoLibro={ ...book};
  }
  
    //Método guardarUsuario
    guardarLibro(){
      if(this.nuevoLibro.id){
        this.servicioLibro.putLibro(this.nuevoLibro.id, this.nuevoLibro).subscribe(()=>{
          this.obtenerLibros();
          this.resetear();
        });
      }else{
      this.servicioLibro.postLibro(this.nuevoLibro).subscribe(()=>{
        this.obtenerLibros();
        this.resetear();
      });
    }
  }
  //Método para limpiar el formulario
  resetear(){
  this.nuevoLibro={titulo:'', numeroPaginas:0, editorial:''};
  }
}