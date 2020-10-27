import { Component, OnInit } from '@angular/core';

import { DataService } from '../../servicios/data.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  public name: string;
  public email: string;
  public password: string;
 
  constructor(private auth: DataService,private alert: AlertController, private ruta: Router) { }

  ngOnInit() {
  }
  OnSubmitRegister(){
    this.auth.register(this.email, this.password, this.name).then(auth =>{
      console.log(auth)
      this.Mensajenormal("Se ha registrado con exito");
      //this.ruta.navigate(['/login']);
      this.name="";
      this.email="";
      this.password="";
    }).catch(err=>{ 
      this.Mensajenormal("Ya existe este usuario");
      this.name="";
      this.email="";
      this.password="";
     
    })
  }
  async Mensajenormal(Texto:string) {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      backdropDismiss: false,
      header: "TechMeek",
      message: Texto,
      buttons: ['ok']     
    });

    await alert.present();
  }
}
