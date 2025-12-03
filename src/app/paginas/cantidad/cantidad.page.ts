import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cantidad',
  templateUrl: './cantidad.page.html',
  styleUrls: ['./cantidad.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CANTIDADPage implements OnInit {
  

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }

}




