import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Plans } from '../entities/plans';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-estimate-premium',
  templateUrl: './estimate-premium.component.html',
  styleUrls: ['./estimate-premium.component.css']
})
export class EstimatePremiumComponent implements OnInit {

  v_name: string= 'Other';
  estimate_form: FormGroup;
  vehicle_list_returned : Observable<String>[];
  vehicle_model: string;
  vehicle_type_for_list: string ="W";
  v_age: number;
  plan_type: string;
  planList: Observable<Plans>[]=[];
  estimated_premium: number;
  // plan: Plans;

  constructor(private u: UserService,private router:Router) { }

  ngOnInit(): void {
    this.reloadVehicleList();
  }

  reloadVehicleList(){

    this.u.getVehicleNamesList(this.vehicle_type_for_list).subscribe(data=>{
      this.vehicle_list_returned =data;
      console.log(this.vehicle_list_returned);
    
    });
  }
  reloadPlanType(){
    this.plan_type= this.plan_type;
  }

  onSubmitEstimatePremium(){
    console.log(this.vehicle_type_for_list);//2w
    console.log(this.v_name);//maruti 2w
    console.log(this.plan_type);//comprehensive
    console.log(this.v_age);//1
    this.u.getPlanAmt(this.v_name.replace(' ','%20'), this.plan_type.replace(' ','%20')).subscribe(data=>{
      this.estimated_premium =data + this.v_age*0.05*data;
      console.log(this.estimated_premium);
    
    });
    

    console.log(this.estimated_premium);
    
  }

}
