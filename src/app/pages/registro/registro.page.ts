import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { BDLocalService } from 'src/app/services/bd-local.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  usuario:string;
  password:string;
  constructor(public bdlocalservice: BDLocalService, public navCtrl: NavController ) { }

  ngOnInit() {
  }
  guardar(){
    this.bdlocalservice.guardarContacto(this.usuario,this.password) 
    
    localStorage.setItem('ingresado', 'true')
    this.navCtrl.navigateRoot('home');
}
  }

 
