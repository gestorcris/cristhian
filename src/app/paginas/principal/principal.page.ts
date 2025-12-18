import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { HeaderGlobalComponent } from 'src/app/componentes/header-global/header-global.component';
import { FooterGlobalComponent } from 'src/app/componentes/footer-global/footer-global.component';
import {ModalController} from '@ionic/angular/standalone'; //nuevo
import { MasComponent } from 'src/app/componentes/mas/mas.component';
import { HttpClient, HttpClientModule,  } from '@angular/common/http';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [HttpClientModule,IonContent, CommonModule, FormsModule, HeaderGlobalComponent,FooterGlobalComponent]
  ,schemas: [CUSTOM_ELEMENTS_SCHEMA],
})



export class PrincipalPage implements OnInit {

   productos: any []=[]
   productosfiltrados: any []=[];
   categorias: any;
/*   productos = [
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
    
    


  ] */

 
  preguntas: any;

  constructor(
    private router: Router,
    private modalCtrl: ModalController, //esta linea es nueva
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.cargarProductos();
    this.cargarCategorias();

  }
  filtarCategoria(nombre:string){
    this.productosfiltrados = this.productos.filter(p=> p.categoria===nombre);
  }

  /*NUEVO */
  filtrarPorSubcategoria(subcategoria: string) {
    this.productosfiltrados = this.productos.filter(p => p.subcategoria === subcategoria);
  }

  imagenesCarrusel = [
  'assets/fotos/123.png',
  'assets/fotos/456.png',
  'assets/fotos/8552.png',
  
];

slideOpts = {
  initialSlide: 0,
  speed: 600,
  autoplay: {
    delay: 3000
  },
  loop: true
};



  mostrarTodos() {
    this.productosfiltrados = [...this.productos];
  }
  cargarCategorias(){
    this.http.get('assets/BD/categorias.json').subscribe((data:any)=>{
      this.categorias = data;
    });

  }

  cargarProductos(){
    this.http.get('assets/BD/productos.json').subscribe((data:any)=>{
      this.productos=data;
      this.productosfiltrados=[...this.productos];
    });  
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
    p => p.titulo.toLowerCase().includes(texto)/* || 
     p.titulo.toLowerCase().includes(texto) ||
    p.precio.toString().includes(texto)  */
  );

  }
  
  async ver_modal(producto: any){
    const modal = await this.modalCtrl.create({
      component: MasComponent,
      componentProps: { imagen: producto.imagen,
        titulo: producto.titulo },
        cssClass: 'estilo_modal'
});
await modal.present();


}
}
