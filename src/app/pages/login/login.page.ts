import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { BDLocalService } from 'src/app/services/bd-local.service';
import { AlertController } from '@ionic/angular';





@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  [x: string]: any;


  // user = {
  //   usuario: "",
  //   password: ""
  // }
  usuar: string;
  passwo: string;

  constructor(private router: Router, 
    public toastController: ToastController, 
    private alertCtrl: AlertController,
    public bdlocalservice: BDLocalService,
    public navCtrl: NavController) { }

  ngOnInit() {
  }


  // ingresarT() {
  //   if (this.user.usuario == 'luis' && this.user.password == 'luis') {
  //     let navigationExtras: NavigationExtras = {
  //       state: {
  //         user: this.user
  //       }
  //     };
  //     this.router.navigate(['/home'], navigationExtras);
  //   }
  // }

  async ingresar(){

    // var  usuario = JSON.parse(localStorage.getItem('usuario'));
    // console.log("entro a ingresar y corre var usuario"+usuario)
//
    this.bdlocalservice.sesione(this.usuar, this.passwo)
    if (this.bdlocalservice.verificar()) {
      console.log('ingresado');
      let navigationExtras: NavigationExtras = {
        state: {
          usuario: this.usuar,
          password: this.passwo,
        }
      };
      this.router.navigate(['/home'], navigationExtras);
    }else{
      console.log("este es el else")
      const alert =await this.alertCtrl.create({
        header: 'datos incorrectos',
        message:'los datos que ingresaste son incorrectos',
        buttons:['aceptar']
      });

      await alert.present();
    }
//
    // if(this.user.usuario == usuario && this.user.password== this.password){
    //   console.log('ingresado');
    //   localStorage.setItem('ingresado', 'true')
    //   this.navCtrl.navigateRoot('home');
    // }else{
    //   console.log("este es el else")
    //   const alert =await this.alertCtrl.create({
    //     header: 'datos incorrectos',
    //     message:'los datos que ingresaste son incorrectos',
    //     buttons:['aceptar']
    //   });

    //   await alert.present();
    // }
  }


}



