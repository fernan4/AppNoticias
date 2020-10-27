import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Observable } from 'rxjs';
import { itemsArticles } from '../../interfaces/noticias';
import { DataService } from '../../servicios/data.service';

@Component({
  selector: 'app-moviles',
  templateUrl: './moviles.page.html',
  styleUrls: ['./moviles.page.scss'],
})
export class MovilesPage implements OnInit {

  titulo: string;
  noticiasM: Observable<itemsArticles[]>;
  numNoticias: number=2;

  @ViewChild(IonInfiniteScroll) scroll: IonInfiniteScroll;
  constructor(private serv: DataService ) { }

  ngOnInit() {
    this.noticiasM=this.serv.recibirNmoviles();
  }

  mostrarNoticias(event){
    setTimeout(() =>{
      if(this.numNoticias<=this.serv.recibirNmoviles.length){      
        
        event.target.complete();
      }else{
        this.scroll.disabled = true;
        this.numNoticias++;
      }
    }, 500);
    console.log(this.numNoticias);
  }

}
