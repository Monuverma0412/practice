import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PutService {
  url ="http://localhost:3000/posts";

  constructor( private http:HttpClient) { 

  }

  putdata(data:any,id:number){
    const newUrl = `${this.url}/${id}`;
    console.log("updated ",this.http.put(newUrl,data).subscribe((data)=>{
      return data
    })
    )
}
}
