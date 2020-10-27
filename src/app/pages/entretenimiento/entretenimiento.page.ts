import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { itemsArticles } from '../../interfaces/noticias';
import { IonInfiniteScroll } from '@ionic/angular';
import { DataService } from '../../servicios/data.service';

@Component({
  selector: 'app-entretenimiento',
  templateUrl: './entretenimiento.page.html',
  styleUrls: ['./entretenimiento.page.scss'],
})
export class EntretenimientoPage implements OnInit {
  titulo: string;
  noticiasE: Observable<itemsArticles[]>;
  num_noticias: number= 3;

  @ViewChild(IonInfiniteScroll) scroll: IonInfiniteScroll;
  constructor(private serv: DataService) { }

  ngOnInit() {
    this.noticiasE=this.serv.recibirnoticiaEntre();
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
