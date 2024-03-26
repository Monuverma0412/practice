import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  private apiUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  getTaskData() {
    let apiUrl = "http://localhost:3000/posts"
    return this.http.get(apiUrl)
  }
 
  postData(data: any){
    this.http.post(this.apiUrl,data).subscribe((res)=>{
     console.log("Response ", res)
   })
 }
 PutTask(data:any,id:number){
  const updatedData = {
    "name": data,
    "id":id
  }
  const newUrl = `${this.apiUrl}/${id}`;
  this.http.put(newUrl,updatedData).subscribe((res)=>{
    console.log("response is ",res) 
  })
}

deleteData(data:any,id:number){
  const newUrl = `${this.apiUrl}/${id}`;
  console.log("deleted",this.http.delete(newUrl,data).subscribe((data)=>{
    return data
  })
  )
}

deleData2(){
  this.http.post(this.apiUrl,DataTransfer).subscribe((res)=>
  console.log("complete", res))
}
}