import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Claims } from 'src/app/entities/claims';
import { AdminService } from "../services/admin.service";
import { UserService } from "../services/user.service";
import { Policy } from 'src/Policy';

@Component({
  selector: 'app-claim-history',
  templateUrl: './claim-history.component.html',
  styleUrls: ['./claim-history.component.css']
})
export class ClaimHistoryComponent implements OnInit {

  
  loginForm: FormGroup;
  submitted: boolean = false;
  claimList:Observable<any>[] = [];
  usermail:String=localStorage.getItem('currentUser');
  currentDate:Date = new Date();
  cls = new Claims();
  // submitted = false;
  polNum = new Policy();


  constructor(private userService: UserService, private router: Router)  //when component is called then that service/waiter (who isholding data) is invoked
  {  }

  ngOnInit(): void {
    this.getClaimsById(this.usermail);
  }

  
  public getClaimsById(usermail) {
    this.userService.getClaimsById(usermail).subscribe(data => {
      this.claimList = data;
      console.log(this.claimList); 
    });
  }


  claimform = new FormGroup({
    mobile : new FormControl(),
    PolicyNum : new FormControl(),
    reqAmt : new FormControl(),
    reason : new FormControl()
  });

  get PolicyNum(){
    return this.claimform.get('PolicyNum');
  }
  get reqAmt(){
    return this.claimform.get('reqAmt');
  }
  get reason(){
    return this.claimform.get('reason');
  }

  claimpolicy() {
    this.cls = new Claims();  
   this.cls.claimDate= this.currentDate;
   this.cls.reqAmt=this.reqAmt.value;
   this.cls.reason = this.reason.value;
   console.log(this.cls);  
   this.add();
  this.submitted = true;
 }
 
 add() {
  this.userService.claimPolicy(this.cls,this.PolicyNum.value)
    .subscribe(data =>{
       console.log(data);
       this.getClaimsById(this.usermail);
      });
 }

  }


