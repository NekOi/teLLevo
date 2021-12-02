import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { APIClientService } from 'src/app/services/apiclient.service';


@Component({
  selector: 'app-evaluar',
  templateUrl: './evaluar.page.html',
  styleUrls: ['./evaluar.page.scss'],
})
export class EvaluarPage implements OnInit {


  user: any;
  users: any;
  posts: any;
  post: any = {
    id: null,
    title: "",
    body: "",
    userId: null
  };




  constructor(private api: APIClientService) { }


  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getUsuarios();
    this.getPosts();



  }

  getPosts() {
    this.api.getPosts().subscribe((data) => {
      this.posts = data;
      this.posts.reverse(); //esto hace que el post aparezca de primero
    })
  }





  deletePost(id) {
    this.api.deletePost(this.post.id).subscribe((data) => {
      this.getPosts();
    });
  }





getUsuarios() {
  this.api.getUsuarios().subscribe((data) => {
    this.users = data;
  })
}

getUsuario(userId) {
  this.api.getUsuario(userId).subscribe((data) => {
    this.user = data;
  })
}

guardarPost(){
  if (this.post.userId == null) {
    if (this.user == undefined) {
      console.log("seleccione un usuario");
      return;
    }
    this.post.userId = this.user.id;
    this.api.createPost(this.post).subscribe(
      () => {
        console.log("post creado correctamente")
        this.getPosts();
      },
      error => {
        console.log("error: " + error)
      });
  } else {
    this.api.updatePost(this.post.id, this.post).subscribe(
      () => {
        console.log("actualizado con exito")
        this.getPosts();
      },
      error => {
        console.log("error: " + error)
      }
    );
  }
}





  }

