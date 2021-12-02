import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
//en la carpeta donde se crea el servicio se coloca el storage
import { Storage } from '@ionic/storage-angular';
import { IBD, Sesion } from '../interface/i-bd';

@Injectable({
  providedIn: 'root'
})
export class BDLocalService {

  usuarios: IBD[] = [];
  sesiones: Sesion[] =[];
  private _storage: Storage | null = null;

  constructor(private storage: Storage, public toastController: ToastController) {
    this.init();
    this.cargarUsuarios();
    this.cargarSesiones();
  }
  //se necesita inicializar con un async por el await
  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }
  //metodo para cargar contactos
  async cargarUsuarios() {
    const miUsuario = await this.storage.get('usuarios');
    if (miUsuario) {
      this.usuarios = miUsuario;
    }
  }

  guardarContacto(usuario: string, password: string) {
    //instruccion lambda, para verificar que el usuario no exista en mi lista de contacto
    const existe = this.usuarios.find(c => c.strUsuario === usuario);
    if (!existe) {
      this.usuarios.unshift({ strUsuario: usuario, strPass: password });
      this._storage.set('usuarios', this.usuarios);
      this.presentToast("usuario agregado con exito!");
    } else {
      this.presentToast("usuario ya existe");
    }
  }
  async cargarSesiones() {
    const miSesion = await this.storage.get('sesiones');
    if (miSesion) {
      this.sesiones = miSesion;
    }
  }
  
  sesione(usuar: string, passwo:string){
    this.sesiones.unshift({ user: usuar, password: passwo });
    this._storage.set('sesiones', this.sesiones);
    console.log("esta sesion iniciada es guardada")
  }
  verificar(){
    const existeUsu = this.usuarios.find(c => c.strUsuario === this.sesiones[0].user);
    const existepass = this.usuarios.find(c => c.strPass === this.sesiones[0].password);
    
    if(existeUsu  && existepass){
      console.log("authguard true")
      return true;
    } else{
      console.log("authguard false")
      return false;
    }
  }

  async presentToast(mensaje: string) {

    const toast = await this.toastController.create({
      message: mensaje,
      translucent: true,
      color: 'medium',
      position: 'top',
      duration: 2000
    });
    toast.present();

  }

}