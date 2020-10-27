import { Component, OnInit } from '@angular/core';
import { DataService } from '../../servicios/data.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  titulo:string;
  email: string;
  password: string;
  constructor(private serv: DataService) { }

  ngOnInit() {
    this.serv.getuser().subscribe(user =>{
      console.log(user.displayName);
      this.email= user.email;
      
    })
  }

}
