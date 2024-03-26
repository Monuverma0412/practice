import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {
  url ="http://localhost:3000/posts";

  constructor( private http:HttpClient) { 

  }

  deleteData(data:any,id:number){
    const newUrl = `${this.url}/${id}`;
    console.log("deleted",this.http.delete(newUrl,data).subscribe((data)=>{
      return data
    })
    )
}
}
