import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {
  mailrec={
    recuperar:""

  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  recuperar(){
    
    let navigationExtras: NavigationExtras = {
      state: {
        mailrec: this.mailrec 
      }
    };
    this.router.navigate(['/login'],navigationExtras); 
  }

}
