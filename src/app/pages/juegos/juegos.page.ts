import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { itemsArticles } from '../../interfaces/noticias';
import { IonInfiniteScroll } from '@ionic/angular';
import { DataService } from '../../servicios/data.service';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.page.html',
  styleUrls: ['./juegos.page.scss'],
})
export class JuegosPage implements OnInit {
  titulo: string;
  noticiasJ: Observable<itemsArticles[]>;
  num_noticias: number= 3;

  @ViewChild(IonInfiniteScroll) scroll: IonInfiniteScroll;
  constructor(private serv: DataService) {  }

  ngOnInit() {
    this.noticiasJ=this.serv.recibirnoticiaJuegos();
  }
  mostrarNoticias(event){
    setTimeout(() =>{
      if(this.num_noticias<=this.serv.recibirNmoviles.length){      
        this.num_noticias++;
        event.target.complete();
      }else{
        this.scroll.disabled = true;
      }
    }, 1000);
    console.log(this.num_noticias);
  }


}
