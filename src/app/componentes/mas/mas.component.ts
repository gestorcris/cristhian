import { IonContent} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular/standalone'; //nuevo

@Component({
  selector: 'app-mas',
  templateUrl: './mas.component.html',
  styleUrls: ['./mas.component.scss'],

    standalone: true,
  imports:[IonContent, CommonModule] ,schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MasComponent  implements OnInit {
  @Input() imagen: string = '';
  @Input() titulo: string = '';

  constructor(
    private modalCtrl: ModalController, //esta linea es nueva
  ) { }

  ngOnInit() {}
  cerrarModal() {
    this.modalCtrl.dismiss();

}

}