import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderGlobalComponent } from 'src/app/componentes/header-global/header-global.component';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.page.html',
  styleUrls: ['./preguntas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderGlobalComponent]
 ,schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PreguntasPage implements OnInit {

  preguntas = [
    {
      icono: 'cart-outline',
      titulo:'¿Cómo puedo realizar una compra?',
      respuesta: 'Puedes obtener nuestros productos visitando nuetra tienda en fisico o compras en linea'
    },

    {
      icono: 'shield-checkmark-outline',
      titulo:'¿Los productos cuentan con garantía?',
      respuesta: 'Sí, todos los prodcutos cuentan con garantía oficial del fabricante'
    },

    {
      icono: 'cube-outline',
      titulo:'¿Realiza envio a domicilio?',
      respuesta: 'Realizamos envios a nivel nacional mediante servientrega'
    },

  ]

  constructor() { }

  ngOnInit() {
  }

}
