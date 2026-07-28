import { Routes } from '@angular/router';
import { Libros } from './features/libros/libros';
import { Galeria } from './shared/galeria/galeria';

export const routes: Routes = [
    { path: '', redirectTo: 'libros', pathMatch: 'full' },
    {path:'libros', component:Libros},
    {path:'galeria', component:Galeria}
];
