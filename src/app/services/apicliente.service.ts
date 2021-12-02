import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIClienteService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }
  // Se establece la base url del API a consumir
  // 192.168.18.7.3000
  apiURL = '192.168.18.7.3000';
  // apiURL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get(this.apiURL + '/posts/').pipe(
      retry(3)
    );
  }

  createPost(post): Observable<any> {
    return this.http.post(this.apiURL + '/posts', post, this.httpOptions).pipe(
      retry(3)
    );
  }


  deletePost(id): Observable<any> {
    return this.http.delete(this.apiURL + '/posts/' + id, this.httpOptions);
  }

}
