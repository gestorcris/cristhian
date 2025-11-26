import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,  IonText, IonCol, IonGrid, IonRow, IonImg   } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader, IonToolbar, 
    IonTitle, IonContent, 
    IonText, IonCol, IonGrid, IonRow, IonImg ],
})
export class HomePage {
  constructor() {}
  
  message: string | null=null;

  showMessage(){
    this.message='Mi primera app con Ionic :D, Soy feli'
  }
}