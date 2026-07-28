import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  imports: [],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css',
})
export class Galeria {

   imagenes = [

    'https://bucket-uni-veritoz.s3.us-east-1.amazonaws.com/labrador1.jpg',

    'https://bucket-uni-veritoz.s3.us-east-1.amazonaws.com/labrador2.jpg',

    'https://bucket-uni-veritoz.s3.us-east-1.amazonaws.com/labrador3.jpg'

  ];

}
