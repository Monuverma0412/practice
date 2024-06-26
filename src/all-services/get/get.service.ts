import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(private http: HttpClient) { }
  url: string = "";
  getPostData():Observable<any> {
    let url = "https://jsonplaceholder.typicode.com/users"
    return this.http.get(url)
  }
}
