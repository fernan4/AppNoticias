import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { DataService } from '../../servicios/data.service';
import { itemsMenu, usuarios } from '../../interfaces/menu';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
})
export class MenubarComponent implements OnInit {
  menuPrincipal: Observable<itemsMenu[]>;
  name: string;
  email:string;
  
  constructor(private ruta:Router, private serv: DataService, private menu:MenuController) { }
  
  ngOnInit() {
    
    this.menuPrincipal=this.serv.recibirMenu();
    this.serv.getuser().subscribe(user =>{
      console.log(user.displayName);
      this.email= user.email;
      this.name=user.displayName;
    })
    
    
  }
  navegar(url:string){
    console.log('Esta accediendo a la url a '+(url));
    this.ruta.navigate([url]);
    this.menu.toggle();
  }
  
   
  
 
}
