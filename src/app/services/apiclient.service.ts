import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIClientService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-llow-Origin': '*'
    })
  }
  // Se establece la base url del API a consumir
  // 192.168.18.7.3000
  //192.168.1.87:3000 mia
  //http://:3000;
  //apiURL = '192.168.18.7.3000';
  //apiURL = 'https://jsonplaceholder.typicode.com';

  //no olvidar
  //levantar el api desde el powershell o cmd json-server -H 192.168.1.87 .\db.json
  
  apiURL = 'http://192.168.1.87:3000';
  constructor(private http: HttpClient) { }
  getUsuario(userId: any): Observable<any> {
    return this.http.get(this.apiURL + '/users/' + userId).pipe(
      retry(3)
    );
  }

  getUsuarios(): Observable<any> {
    return this.http.get(this.apiURL + '/users/').pipe(
      retry(3)
    );
  }

  getPost(id): Observable<any> {
    return this.http.get(this.apiURL + '/post/' + id).pipe(
      retry(3)
    );
  }

  getPosts(): Observable<any> {
    return this.http.get(this.apiURL + '/posts/').pipe(
      retry(3)
    );
  }

  updatePost(id, post): Observable<any> {
    return this.http.put(this.apiURL + '/posts/' + id, post, this.httpOptions).pipe
      (retry(3));
  }

  createPost(post): Observable<any> {
    return this.http.post(this.apiURL + '/posts/', post, this.httpOptions).pipe(
      retry(3)
    );
  }


  deletePost(id): Observable<any> {
    return this.http.delete(this.apiURL + '/posts/'+id, this.httpOptions);
  }

}
