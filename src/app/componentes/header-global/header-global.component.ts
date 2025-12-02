import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  Router } from '@angular/router';
import {IonContent, IonHeader, IonTitle, IonToolbar, IonButtons} from '@ionic/angular/standalone'
@Component({
  selector: 'app-header-global',
  templateUrl: './header-global.component.html',
  styleUrls: ['./header-global.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons]
})
export class HeaderGlobalComponent  implements OnInit {

  constructor(private router:Router ) { }

  ngOnInit() {}
  
  navegar () { 
    this.router.navigate(['/principal'])


  }
}