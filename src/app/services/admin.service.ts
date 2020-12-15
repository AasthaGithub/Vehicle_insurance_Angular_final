import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable } from 'rxjs';
import { Claims } from 'src/app/entities/claims';
import { Plans } from 'src/Plans';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:8096/api/v1/';
  constructor(private http:HttpClient) { }

  displayPlans(){
    return this.http.get<Plans[]>(this.baseUrl + 'plans');
  }

  addPlan(plan:Plans){
    return this.http.post(this.baseUrl + 'addplan',plan);
  }


  viewClaims(): Observable<any[]>{
    console.log(this.http.get<any[]>(this.baseUrl + 'claims'));
    return this.http.get<any[]>(this.baseUrl + 'claims');
  }

  approveClaim(id:number):Observable<number>//RETURN TYPE
  {  
    console.log(this.baseUrl+'approvclaim/'+ id);
      return this.http.get<number>(this.baseUrl + 'approvclaim/'+id);
  }

  declineClaim(id:number):Observable<number>//RETURN TYPE
   {
    console.log(this.baseUrl+'declineclaim/'+id);
      return this.http.get<number>(this.baseUrl + 'declineclaim/'+id);
  }

  
}
