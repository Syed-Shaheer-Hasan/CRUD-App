import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  // dta:any;
  // constructor(private useradd:UserAdressService) {
  //   let ad = this.useradd.getuserAddress();
  //   this.dta = ad;

  //  }
  // getuserData(){
  //   return{
  //     name:"Syed Shaheer Haasan",
  //     Email:"sheryhasan@gamil.com",
  //     mobile:566565656565,
  //     age:23,
  //     address:this.dta

  //   }
  // }
  url = 'http://localhost:3000/Users/';
  constructor(private http:HttpClient){}
  createUser(data:any){
    return this.http.post(this.url,data)
  }
  getAllusers(){
    return this.http.get(this.url);
  } 

  editUserdata(user:any)
  {
    return this.http.put(this.url + user.id, user)
  }

  deletUserdata(user:any){
    console.log("this.url",this.url)
    console.log("user.id",user.id)
    return this.http.delete(this.url + user.id);

  }

 


}
