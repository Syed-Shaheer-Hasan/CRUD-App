import { Component, OnInit, ViewChild } from '@angular/core';
import { UserdataService } from '../services/userdata.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // for service use 
  // data:any;
  // addr:any;
  // constructor(private Ser :UserdataService) {
  // let op = this.Ser.getuserData();
  // console.log(op);
  //  this.data = op;
  //   this.addr = op.address;
  //  }

  // for api use
  userrs: any;
  alert: boolean = false;
  obj: any;
  isEdit:boolean= false;
  userObj = {
    name: '',
    mobile: '',
    email: '',
    password: ''
  }
  constructor(private userData: UserdataService, private modalService:NgbModal) {
    
  }

  postData(data: any) {
    console.log("data", data);
    this.userData.createUser(data).subscribe((res) => {

      this.getpostDta()
      this.alert = true;
      
    })

  }
  getpostDta() {
    this.userData.getAllusers().subscribe((res) => {
      this.obj = res;
    })
  }

  edit(user: any) {
    this.userObj = user;
    this.isEdit = true;
  }

  deletUser(user: any) {
    this.userData.deletUserdata(user).subscribe(() => {
      this.getpostDta();
    })
  }
  closeAlert() {
    this.alert = false;
  }
  updateUser(){
    this.isEdit =! this.isEdit;
    this.userData.editUserdata(this.userObj).subscribe(()=>{
      this.getpostDta()
    })
  }

  ngOnInit(): void {

    this.getpostDta()
    
  
  }
  openModal(targetModal:any) {
    this.modalService.open(targetModal,{
      centered:true
    })
     
    };
  
    onSubmit(){
      this.modalService.dismissAll();
    }

}

