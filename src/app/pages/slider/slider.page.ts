import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../servicios/data.service';
import { Observable } from 'rxjs';
import { slides } from '../../interfaces/slide';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss'],
})
export class SliderPage implements OnInit {
  Splash: Observable<slides[]>;


  constructor(private serv: DataService, private ruta: Router, private menu:MenuController) { }

  ngOnInit() {
    this.Splash=this.serv.recibirSplash();
    this.menu.swipeGesture(false);
  }  

  navegar(){
     this.ruta.navigate(['/login']); 
  
  }
  comenzar(item){
    console.log(item);
    this.Splash=item;


  }
}
