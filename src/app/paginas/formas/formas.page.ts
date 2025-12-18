import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-formas',
  templateUrl: './formas.page.html',
  styleUrls: ['./formas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, CommonModule, FormsModule]
})
export class FORMASPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
