import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { Router } from '@angular/router';
import { Plans } from 'src/Plans';
import { AdminService } from '../services/admin.service';


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private adminService: AdminService,private router:Router) { }

  ngOnInit(): void {
    this.allPlans();
  }

  p = new Plans();
  planList : Plans[];

  allPlans(){
    this.adminService.displayPlans().subscribe(data=>{
      this.planList = data;
      console.log(this.planList);
    });
  }

  // getPlans(){
  //   this.planList.forEach(element => {
  //     console.log(element);
  //     document.getElementById('listGroup').innerHTML = "element";
  //   });
  // }

}
