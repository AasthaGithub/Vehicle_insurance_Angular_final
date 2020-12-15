import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private userService : UserService) { }
  user : User = new User();
  pswd : any;
  cpswd : any;


  ngOnInit(): void {
  }
  adduserform = new FormGroup({  
    username:new FormControl(),
    useremail:new FormControl(),
    userDob:new FormControl(),  
    phone:new FormControl(),
    useraddr:new FormControl(),
    userpswd:new FormControl(),
    confirmpswd:new FormControl() 
  });

  get username(){  
    console.log(this.adduserform.get('username'));
    return this.adduserform.get('username');  
  }
  get useremail(){  
    console.log(this.adduserform.get('useremail'));
    return this.adduserform.get('useremail');  
  }
  get userDob(){  
    console.log(this.adduserform.get('userDob'));
    return this.adduserform.get('userDob');  
  }
  get phone(){  
    console.log("here!");
    console.log(this.adduserform.get('phone'));
    return this.adduserform.get('phone');  
  }
  get useraddr(){  
    console.log(this.adduserform.get('useraddr'));
    return this.adduserform.get('useraddr');  
  }
  get userpswd(){
    // this.pswd = this.adduserform.get('userpswd');
    // this.cpswd = this.adduserform.get('confirmpswd');
    // console.log(this.pswd);
    // console.log(this.cpswd);
      return this.adduserform.get('userpswd');
    // return this.adduserform.get('userpswd');  
  }
  get confirmpswd(){ 
    console.log(this.adduserform.get('confirmpswd')) ;
      return this.adduserform.get('confirmpswd');  
  }

  clearForm(){
    this.adduserform.reset();
  }

  addUser(addUser){ 
    this.user=new User();   
    if(this.userpswd.value !== this.confirmpswd.value){
      this.clearForm();
      alert("Confirm Password Mismatch");
    }else{
      this.user.userName = this.username.value;
    this.user.userEmail = this.useremail.value;
    this.user.userDob = this.userDob.value;
    this.user.phone = this.phone.value;
    this.user.userAddr = this.useraddr.value;
    this.user.userPswd = this.userpswd.value;
    }
    console.log(this.user);
    this.add();  
  }


  add(){
    this.userService.addNewUser(this.user).subscribe(data=>console.log(data),error=>console.error());
    this.clearForm();
    alert("Registered User");
    document.location.href = "http://localhost:4200/login";
    
    this.user = new User();
  }

}
