import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Policy } from 'src/Policy';
import { User } from 'src/User';
import { Vehicle } from 'src/Vehicle';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-purchase-policy',
  templateUrl: './purchase-policy.component.html',
  styleUrls: ['./purchase-policy.component.css']
})
export class PurchasePolicyComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  policy = new Policy ();
vehicle = new Vehicle();
user = new User();
date = new Date();

  buyinsurance = new FormGroup({
    vehicleType : new FormControl(),
    model : new FormControl(),
    regNum : new FormControl(),
    manufact : new FormControl(),
    license : new FormControl(),
    purchaseDate : new FormControl(),
    engNo : new FormControl(),
    chassisNo : new FormControl()
  });

  get vehicleType(){  
    console.log(this.buyinsurance.get('vehicleType'));
    return this.buyinsurance.get('vehicleType');  
  }
  get model(){  
    console.log(this.buyinsurance.get('model'));
    return this.buyinsurance.get('model');  
  }
  get regNum(){  
    console.log(this.buyinsurance.get('regNum'));
    return this.buyinsurance.get('regNum');  
  }
  get manufact(){  
    console.log(this.buyinsurance.get('manufact'));
    return this.buyinsurance.get('manufact');  
  }
  get  license (){  
    console.log(this.buyinsurance.get('license'));
    return this.buyinsurance.get('license');  
  }
  get  purchaseDate (){  
    console.log(this.buyinsurance.get('purchaseDate'));
    return this.buyinsurance.get('purchaseDate');  
  }
  get engNo (){  
    console.log(this.buyinsurance.get('engNo'));
    return this.buyinsurance.get('engNo');  
  }
  get  chassisNo (){  
    console.log(this.buyinsurance.get('chassisNo'));
    return this.buyinsurance.get('chassisNo');  
  }
  clearForm(){
    this.buyinsurance.reset();
  }

  addVehicle(addVehicle){
    this.vehicle=new Vehicle();  
    this.vehicle.vehicleType = this.vehicleType.value;
    this.vehicle.regNum = this.regNum.value; 
    this.vehicle.model = this.model.value;
    this.vehicle.manufact = this.manufact.value;
    this.vehicle.license = this.license.value;
    this.vehicle.purchaseDate = this.purchaseDate.value;
    this.vehicle.engNo = this.engNo.value;
    this.vehicle.chassisNo = this.chassisNo.value;
    console.log(this.vehicle);
    this.user.userEmail = localStorage.getItem('currentUser');
    console.log(this.user.userEmail);
    this.add();
}
add(){
  console.log(this.userService.addVehicle(this.vehicle,this.user.userEmail));
  this.userService.addVehicle(this.vehicle,this.user.userEmail).subscribe(data=>console.log(data),error=>console.log(error));
  localStorage.setItem('regNum',this.regNum.value);
  localStorage.setItem('vehicleType',this.manufact.value+' '+this.vehicleType.value);
  this.clearForm();
  alert("vehicle registered!");
  this.router.navigate(['../../chooseplan']);
  // document.location.href = "http://localhost:4200/user-home/chooseplan";
}

}
