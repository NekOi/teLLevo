import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ToastController,NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { APIClientService } from 'src/app/services/apiclient.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nomUsuario: string


  constructor(private api: APIClientService, private activeroute: ActivatedRoute, private router: Router, public toastController: ToastController,public navCtrl: NavController, private menu: MenuController) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.nomUsuario = this.router.getCurrentNavigation().extras.state.usuario;
        console.log(this.nomUsuario)
        this.router.navigate(['home/uno'])
      } else { this.router.navigate(["/login"]) }
    });

  }
  segmentChanged(event: any) {
    console.log(event);
    let ruta = event.detail.value
    this.router.navigate(['home/' + ruta])
  }
  cerrarSesion() {
    this.navCtrl.navigateRoot('login');
  }
















  mostrar() {
    this.presentToast("Hola " + this.nomUsuario);
  }
  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

}
