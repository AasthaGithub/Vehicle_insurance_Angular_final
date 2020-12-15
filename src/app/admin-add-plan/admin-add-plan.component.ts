import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Plans } from 'src/Plans';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-add-plan',
  templateUrl: './admin-add-plan.component.html',
  styleUrls: ['./admin-add-plan.component.css']
})
export class AdminAddPlanComponent implements OnInit {

  constructor(private adminService: AdminService,private router:Router) { }

  plan = new Plans();

  ngOnInit(): void {
  }

  getPlan = new FormGroup({
    pType : new FormControl(),
    vehicleType : new FormControl(),
    planAmt : new FormControl()
  });

  get pType(){
    console.log(this.getPlan.get('pType'));
    return this.getPlan.get('pType');
  }
  get vehicleType(){
    console.log(this.getPlan.get('vehicleType'));
    return this.getPlan.get('vehicleType');
  }
  get planAmt(){
    console.log(this.getPlan.get('planAmt'));
    return this.getPlan.get('planAmt');
  }

  addplan(addplan){
    this.plan = new Plans();
    this.plan.planType = this.pType.value;
    this.plan.vehicleType = this.vehicleType.value;
    this.plan.planAmt = this.planAmt.value;
    console.log(this.plan);
    this.add();
  }

  add(){
    this.adminService.addPlan(this.plan).subscribe(data=>{
      console.log(data);
      alert("New Plan Added!");
      this.router.navigate['admin-home'];
    });
  }


}
