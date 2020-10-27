import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { promise } from 'protractor';
import { itemsMenu, itemsMenu2, slide } from '../interfaces/menu';
import { itemsArticles } from '../interfaces/noticias';
import { slides, news } from '../interfaces/slide';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  //API_kEY="22284efb74334b03967077dc9d9dacfa";
  
  constructor(private http: HttpClient, private AFauth : AngularFireAuth, private db: AngularFirestore) { }
  
  recibirMenu(){
    return this.http.get<itemsMenu[]>('/assets/data/menu.json');
  }
  recibirCategoria(){
    return this.http.get<itemsMenu2[]>('/assets/data/menu2.json');
  }
  recibirNoticias(){
    return this.http.get<itemsArticles[]>('/assets/data/noticias.json');
  }
  recibirNmoviles(){
    return this.http.get<itemsArticles[]>('/assets/data/moviles.json');
  }
  recibirPc(){
    return this.http.get<itemsArticles[]>('/assets/data/pc.json');
  }
  recibirnoticiaJuegos(){
    return this.http.get<itemsArticles[]>('/assets/data/juegos.json');
  }

  recibirnoticiaEntre(){
    return this.http.get<itemsArticles[]>('/assets/data/entretenimiento.json');
  }
  recibirSlide(){
    return this.http.get<slide[]>('/assets/data/slide.json');
  }
  recibirSplash(){
    return this.http.get<slides[]>('/assets/data/splash.json');
  }
  recibirNews(){
    return this.http.get<news[]>('/assets/data/news.json');
  }
  
  
  login(email:string, password:string){
    return new Promise((resolve, rejected) =>{
      this.AFauth.signInWithEmailAndPassword(email, password).then(res => {
        resolve(res);
      }).catch(err => rejected(err));
    });

  }

  register(email:string, password:string, name: string){
    return new Promise ((resolve, reject)=>{
      this.AFauth.createUserWithEmailAndPassword(email, password).then( res =>{
        console.log(res.user.uid);
        
        const uid=res.user.uid;
        this.db.collection('users').doc(uid).set({
          name: name,
          uid: uid
        })


        resolve(res); 
      }).catch(err=>reject(err))

    });  
  }
  recibirDatos(){
     return this.db.collection('users').snapshotChanges();
    //return this.db.collection('chatsRooms').doc(chat_id).valueChanges()
  }
  getuser(){
    return this.AFauth.authState;
  }

  
}
