import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
  ,schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PrincipalPage implements OnInit {
  productos = [
    {
      id: 1, 
      titulo: "SAAAAAAAAAAAA",
      precio:120,
      descripcion: "asdfghjkl",
      imagen: "assets/fotos/3.webp"
    },

    {
      id: 2, 
      titulo: "SOY UNA PAPA FEA",
      precio:120,
      descripcion: "asdfghjkl",
      imagen: "assets/fotos/3.webp"
    },

    {
      id: 3, 
      titulo: "SOY UNA PAPA FEA",
      precio:120,
      descripcion: "asdfghjkl",
      imagen: "assets/fotos/3.webp"
    },

    {
      id: 4, 
      titulo: "SOY UNA PAPA FEA",
      precio:120,
      descripcion: "asdfghjkl",
      imagen: "assets/fotos/3.webp"
    },

    {
      id: 5, 
      titulo: "SOY UNA PAPA FEA",
      precio:120,
      descripcion: "asdfghjkl",
      imagen: "assets/fotos/3.webp"
    },

    {
      id: 6, 
      titulo: "SOY UNA PAPA FEA",
      precio:120,
      descripcion: "asdfghjkl",
      imagen: "assets/fotos/3.webp"
    }

  ]
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


  irvermas(producto:any){
    this.router.navigate(['/vermas'], { queryParams: producto });
  }

}
