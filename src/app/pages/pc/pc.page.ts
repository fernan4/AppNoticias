import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { itemsArticles } from '../../interfaces/noticias';
import { IonInfiniteScroll } from '@ionic/angular';
import { DataService } from '../../servicios/data.service';

@Component({
  selector: 'app-pc',
  templateUrl: './pc.page.html',
  styleUrls: ['./pc.page.scss'],
})
export class PcPage implements OnInit {
  titulo: string;
  noticiasPc: Observable<itemsArticles[]>;
  num_noticias: number= 3;

  @ViewChild(IonInfiniteScroll) scroll: IonInfiniteScroll;
  constructor(private serv: DataService) { }

  ngOnInit() {
    this.noticiasPc=this.serv.recibirPc();
  }
  mostrarNoticias(event){
    setTimeout(() =>{
      if(this.num_noticias<=this.serv.recibirNmoviles.length){      
        this.num_noticias++;
        event.target.complete();
      }else{
        this.scroll.disabled = true;
      }
    }, 500);
    console.log(this.num_noticias);
  }

}
