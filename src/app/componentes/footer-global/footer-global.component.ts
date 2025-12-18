import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import {} from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { logoFacebook, logoYoutube, logoWhatsapp, logoInstagram } from 'ionicons/icons';

@Component({
  selector: 'app-footer-global',
  templateUrl: './footer-global.component.html',
  styleUrls: ['./footer-global.component.scss'],
  standalone: true,
  imports: [ CommonModule, IonicModule, RouterModule]
  ,schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FooterGlobalComponent  implements OnInit {

  constructor(private router:Router ) { 
    addIcons({ logoFacebook, logoYoutube, logoWhatsapp, logoInstagram });
  }

  ngOnInit() {}

  navegar () { 
    this.router.navigate(['/cantidad'])
  }

  formas(){
    this.router.navigate(['/formas'])
  }

  precios(){
    this.router.navigate(['/precios'])
  }
  
preguntas () { 
    this.router.navigate(['/preguntas'])
  }

}
