import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { Observable } from 'rxjs';
import { Policy } from 'src/Policy';
import { User } from 'src/User';
import { Vehicle } from 'src/Vehicle';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employeeslist: Observable<any>[] = [];

  constructor(private userService: UserService) { }

  user = new User();
  policyList : Observable<Policy>[] = [];
  // vehicleRegNum : Vehicle;
  // policy = new Policy();
  // vehicle = new Vehicle();

  ngOnInit(): void {
    this.user.userEmail = localStorage.getItem('currentUser');
    this.userService.getPolicyDetails(this.user.userEmail).subscribe(
      data=>{
        this.policyList = data;
        console.log(this.policyList);
      });
  }
  
}
