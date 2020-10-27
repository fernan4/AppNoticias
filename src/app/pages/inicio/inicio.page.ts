import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../../servicios/data.service';
import { itemsMenu, itemsMenu2, slide } from '../../interfaces/menu';
import { MenuController } from '@ionic/angular';
import { itemsArticles } from '../../interfaces/noticias';
import { news } from '../../interfaces/slide';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  menuPrincipal: Observable<itemsMenu[]>;
  menuPrincipal2: Observable<itemsMenu2[]>;
  Articulos:Observable<itemsArticles[]>;
  PrincipalSlider: Observable<slide[]>; 
  news: Observable<news[]>;
  name:string;
  email:string;
  constructor(
    private serv: DataService,
    private ruta: Router ,
    private menu: MenuController,
    private browser: InAppBrowser
    ) { }

  ngOnInit() {
    this.menuPrincipal=this.serv.recibirMenu();
    this.menuPrincipal2=this.serv.recibirCategoria();
    this.Articulos=this.serv.recibirNoticias();
    this.PrincipalSlider=this.serv.recibirSlide();
    this.news=this.serv.recibirNews();
    
    /*this.serv.recibirNoticias().subscribe((data)=>{
      console.log(data);
      this.articles=data.articles;
    });*/
  }
  
  navegar(url:string){
    console.log('Esta accediendo a la url a '+(url));
    this.ruta.navigate([url]);
    this.menu.toggle();
  }
  navegar2(url:string){
    console.log('Esta accediendo a la url a '+(url));
    this.ruta.navigate([url]);
   
  }
  openUrl(url:string, target:string){
    const link= url
    this.browser.create(link, target);
  }
  

}
