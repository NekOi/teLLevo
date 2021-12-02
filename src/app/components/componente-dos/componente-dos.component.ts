import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingController } from '@ionic/angular';


declare var google;
@Component({
  selector: 'app-componente-dos',
  templateUrl: './componente-dos.component.html',
  styleUrls: ['./componente-dos.component.scss'],
})

export class ComponenteDosComponent implements OnInit {

  constructor(private router: Router, private geolocation: Geolocation, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadMap();
  }

  async loadMap() {

    const loading = await this.loadingCtrl.create();
    loading.present();
    const rta = await this.geolocation.getCurrentPosition();
    const myLatLng = {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
    console.log(myLatLng);
    const mapEle: HTMLElement = document.getElementById('map');
    const map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12

    });

    google.maps.event
      .addListenerOnce(map, 'idle', () => {
        loading.dismiss();
        const marker = new google.maps.Marker({
          position:{
            lat: myLatLng.lat,
            lng: myLatLng.lng
          },
          zoom:8,
          map: map,
          title:'Estas aquí'
        });
      });

  }


  ciudades: any[] = [
    { idc: 1, ciudad: "alameda" },
    { idc: 2, ciudad: "antonio varas" },
    { idc: 3, ciudad: "maipu" },
    { idc: 4, ciudad: "melipilla" },
    { idc: 5, ciudad: "plaza norte" },
    { idc: 6, ciudad: "plaza oeste" },
    { idc: 7, ciudad: "vespucio" },
    { idc: 8, ciudad: "vinna del mar" },
  ]

  dato: any = {
    desde: "",
    hasta: "",
    precio: ""
  }


  evaluar() {
    this.router.navigate(['/evaluar']);
  }

}


