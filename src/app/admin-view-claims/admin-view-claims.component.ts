import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { AdminService } from "../services/admin.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Claims } from 'src/app/entities/claims';

@Component({
  selector: 'app-admin-view-claims',
  templateUrl: './admin-view-claims.component.html',
  styleUrls: ['./admin-view-claims.component.css']
})
export class AdminViewClaimsComponent implements OnInit {

 // loginForm: FormGroup;
  submitted: boolean = false;
  claimList: Observable<any>[] = [];
  
  clicked = false;

  isClicked = false;
  constructor(private adminService: AdminService, private router: Router)  //when component is called then that service/waiter (who isholding data) is invoked
  {  }
  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.adminService.viewClaims().subscribe(data => {
      this.claimList = data;
      console.log(this.claimList); 
    });
  }

  
  approveClaim(id: number) {
    this.adminService.approveClaim(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  
  declineClaim(id: number) {
    this.adminService.declineClaim(id).subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}
