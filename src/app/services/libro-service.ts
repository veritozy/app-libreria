import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../model/libro';

@Injectable({
  providedIn: 'root',
})
export class LibroService {
  private http = inject(HttpClient);

  private API_LIBROS = 'http://184.73.135.241:8080/libros';

  //Método GET
  getLibros():Observable<Libro[]>{
    return this.http.get<Libro[]>(this.API_LIBROS);
  }

  
  //Método POST
  postLibro(libro: Libro):Observable<Libro>{
    return this.http.post<Libro>(`${this.API_LIBROS}/guardarLibro`, libro);
  }

  //Método PUT
putLibro(id:number, libro:Libro):Observable<Libro>{
  return this.http.put<Libro>(`${this.API_LIBROS}/actualizarLibro/${id}`, libro);
}

//Método DELETE
deleteLibro(id:number):Observable<void>{
  return this.http.delete<void>(`${this.API_LIBROS}/eliminarLibro/${id}`);
}

}
