import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }
  url ="http://localhost:3000/posts";

  postData(data: any){
     this.http.post(this.url,data).subscribe((res)=>{
      console.log("Response ", res)
    })
  }

 
  }

