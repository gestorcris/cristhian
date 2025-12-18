import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderGlobalComponent } from 'src/app/componentes/header-global/header-global.component';
import { FooterGlobalComponent } from 'src/app/componentes/footer-global/footer-global.component';
import {ModalController} from '@ionic/angular/standalone'; //nuevo
import { MasComponent } from 'src/app/componentes/mas/mas.component';
import { HttpClient, HttpClientModule,  } from '@angular/common/http';
import { IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [HttpClientModule,IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, CommonModule, FormsModule, HeaderGlobalComponent,FooterGlobalComponent], schemas: [CUSTOM_ELEMENTS_SCHEMA],

})



export class PrincipalPage implements OnInit {

  productos: any []=[]
  productosfiltrados: any []=[];
  categorias: any;
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
    p => p.titulo.toLowerCase().includes(texto)
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

}
