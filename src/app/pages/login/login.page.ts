import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { itemsMenu } from '../../interfaces/menu';
import { DataService } from '../../servicios/data.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  header: string ='TechMeek';
  
  email: string;
  password: string;
  contador=3;
 
  constructor(private ruta: Router,private alert: AlertController, private menu: MenuController, private authservice: DataService) {}

  ngOnInit() {
    this.email="";
    this.password="";
    this.menu.swipeGesture(false);
  }
  onSubmitLogin() {
    this.authservice.login(this.email, this.password).then( res =>{
      this.ruta.navigate(['/inicio']);
      this.Mensajenormal("Bienvenido "+this.email);
      this.email="";
      this.password="";
    }).catch(err => {
      this.Mensajenormal("los datos son incorrectos o no existe el usuario");
      this.email="";
      this.password="";
      })
  }
 

  async Mensajenormal(Texto:string) {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      backdropDismiss: false,
      header: this.header,
      message: Texto,
      buttons: ['ok']     
    });

    await alert.present();
  }
  
  
  /*Valida(){
    if(this.password==='1234' && this.username ==='fernan'){
      this.Mensajenormal('Bienvenido '+this.username);
      
      this.username="";
      this.password="";
      this.ruta.navigate(['/inicio']); 
    }else{
      this.contador--;
      if (this.contador===0) {
        this.Mensajenormal("Verifique los datos nuevamente");   
        
      }else{  
        this.Mensajenormal('Usuario incorrecto');
      }
    }
  }*/
  navegar(url:string){
    console.log('Esta accediendo a la url a '+(url));
    this.ruta.navigate([url]);
  }

}
