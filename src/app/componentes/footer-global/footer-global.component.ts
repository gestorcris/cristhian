import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import {} from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer-global',
  templateUrl: './footer-global.component.html',
  styleUrls: ['./footer-global.component.scss'],
  standalone: true,
  imports: [ CommonModule, IonicModule, RouterModule]
  ,schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FooterGlobalComponent  implements OnInit {

  constructor(private router:Router ) { }

  ngOnInit() {}

  navegar () { 
    this.router.navigate(['/cantidad'])


  }
  
preguntas () { 
    this.router.navigate(['/preguntas'])


  }

}
