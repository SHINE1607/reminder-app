import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;


@Injectable({
  providedIn: 'root'
})
export class DataService {
  //http is the name of the instance of the constructor
  //this can be written as 
  // constructor(HttpClient){
  //   this.http = HttpClient
  // }
  constructor(private http : HttpClient) { }

  getUsers(){
   
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  getUser(userId){
    
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }
  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  
}
