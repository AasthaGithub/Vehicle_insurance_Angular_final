import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Policy } from 'src/Policy';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-choose-plan',
  templateUrl: './choose-plan.component.html',
  styleUrls: ['./choose-plan.component.css']
})
export class ChoosePlanComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  policy = new Policy();
  date = new Date();
  // startDate = new Date();
  newDate = new Date();
  userEmail = localStorage.getItem('currentUser');
  regNum = localStorage.getItem('regNum');
  vehicleType = localStorage.getItem('vehicleType');
  planId : number;

  choosePlan = new FormGroup({
    pType : new FormControl(),
    period : new FormControl(),
    startDate : new FormControl(),
    endDate : new FormControl()
  });

  get pType(){
    return this.choosePlan.get('pType');
  }
  get period(){
    return this.choosePlan.get('period');
  }
  get startDate(){
    return this.choosePlan.get('startDate');
  }
  get endDate(){
    return this.choosePlan.get('endDate');
  }

  addPolicy(){
    this.policy = new Policy();
    this.policy.period = this.period.value;
    // this.startDate = new Date(this.date.getFullYear() ,this.date.getMonth(),this.date.getDate())
    this.policy.startDate = this.startDate.value;
    // this.newDate = new Date(this.date.getFullYear() + this.period.value,this.date.getMonth(),this.date.getDate());
    this.policy.endDate = this.endDate.value;
    console.log(this.policy);
    this.getPlan();
  }

  getPlan(){
    this.userService.getPlanId(this.vehicleType,this.pType.value).subscribe(data=>{
      this.planId = data;
      console.log(this.planId);
    });
    // console.log(this.planId);
    // this.add();
  }

  add(){
    this.userService.addPolicy(this.policy,this.userEmail,this.regNum,this.planId).subscribe(data=>{
      console.log(data);
      alert("Policy Purchased!");
      // this.router.navigate['user-home'];
      document.location.href = "http://localhost:4200/user-home";
    });
  }
}
