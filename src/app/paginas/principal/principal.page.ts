import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { HeaderGlobalComponent } from 'src/app/componentes/header-global/header-global.component';
import { FooterGlobalComponent } from 'src/app/componentes/footer-global/footer-global.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderGlobalComponent,FooterGlobalComponent]
  ,schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PrincipalPage implements OnInit {
  productos = [
    {
      id: 1, 
      titulo: "PAPA PAPA",
      precio: 1,
      descripcion: "POTATO 1",
      imagen: "assets/fotos/pp.jpeg"
    },

    {
      id: 2, 
      titulo: "HIJO PAPA",
      precio:2,
      descripcion: "POPTATO 2",
      imagen: "assets/fotos/ppp.jpg"
    },

    {
      id: 3, 
      titulo: "TIO PAPA",
      precio:3,
      descripcion: "POPATO 3",
      imagen: "assets/fotos/pn.png"
    },

    {
      id: 4, 
      titulo: "SOBRINO PAPA",
      precio:4,
      descripcion: "POPATO 4",
      imagen: "assets/fotos/pp.jpeg"
    },

    {
      id: 5, 
      titulo: "PAPA POTATO",
      precio:5,
      descripcion: "POPATO 5",
      imagen: "assets/fotos/3.webp"
    },

    {
      id: 6, 
      titulo: "AMIGO PAPA",
      precio:6,
      descripcion: "POPATO 6",
      imagen: "assets/fotos/3.webp"
    },
    {
       id: 7, 
      titulo: "PAPA JOVEN",
      precio:7,
      descripcion: "POPATO 7",
      imagen: "assets/fotos/3.webp"

    },
    {
       id: 8, 
      titulo: "VECINO PAPA",
      precio:8,
      descripcion: "POPATO 8",
      imagen: "assets/fotos/3.webp"

    },
    {
       id: 9, 
      titulo: "SOY UNA PAPA",
      precio:9,
      descripcion: "POPATO 9",
      imagen: "assets/fotos/3.webp"

    },
    {
       id: 10, 
      titulo: "SOY UNA PAPA FEA",
      precio:10,
      descripcion: "POPATO 10",
      imagen: "assets/fotos/3.webp"

    }, 

     {
      id: 11, 
      titulo: "PAPA PAPA",
      precio: 11,
      descripcion: "POTATO 1",
      imagen: "assets/fotos/pp.jpeg"
    },

    {
      id: 12, 
      titulo: "HIJO PAPA",
      precio:12,
      descripcion: "POPTATO 2",
      imagen: "assets/fotos/ppp.jpg"
    },

    {
      id: 13, 
      titulo: "TIO PAPA",
      precio:13,
      descripcion: "POPATO 3",
      imagen: "assets/fotos/pn.png"
    },

    {
      id: 14, 
      titulo: "SOBRINO PAPA",
      precio:14,
      descripcion: "POPATO 4",
      imagen: "assets/fotos/3.webp"
    },

    {
      id: 15, 
      titulo: "PAPA POTATO",
      precio:15,
      descripcion: "POPATO 5",
      imagen: "assets/fotos/ppp.jpg"
    },

    {
      id: 16, 
      titulo: "AMIGO PAPA",
      precio:16,
      descripcion: "POPATO 6",
      imagen: "assets/fotos/3.webp"
    },
    {
       id: 17, 
      titulo: "PAPA JOVEN",
      precio:17,
      descripcion: "POPATO 7",
      imagen: "assets/fotos/3.webp"

    },
    {
       id: 18, 
      titulo: "VECINO PAPA",
      precio:18,
      descripcion: "POPATO 8",
      imagen: "assets/fotos/3.webp"

    },
    {
       id: 19, 
      titulo: "SOY UNA PAPA",
      precio:19,
      descripcion: "POPATO 9",
      imagen: "assets/fotos/3.webp"

    },
    {
       id: 20, 
      titulo: "SOY UNA PAPA FEA",
      precio:20,
      descripcion: "POPATO 10",
      imagen: "assets/fotos/3.webp"

    }, 
    
    


  ]

  productosfiltrados= [...this.productos ];
  preguntas: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


  irvermas(producto:any){
    this.router.navigate(['/vermas'], { queryParams: producto });
  }


  filtrar(event:any){
    const texto = (event.target.value || '').toLowerCase().trim();

    if(texto === '') {
      this.productosfiltrados = [...this.productos];
      return;
  }
  this.productosfiltrados = this.productos.filter( 
    p => p.titulo.toLowerCase().includes(texto) || 
    p.titulo.toLowerCase().includes(texto) ||
    p.precio.toString().includes(texto) 
  );

  }
  



}
