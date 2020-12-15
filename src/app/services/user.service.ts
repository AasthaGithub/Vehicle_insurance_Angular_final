import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Policy } from 'src/Policy';
import { User } from 'src/User';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Claims } from 'src/app/entities/claims';
import { Vehicle } from 'src/Vehicle';
import { Plans } from '../entities/plans';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8096/api/v1/";
  // private currentUserSubject: BehaviorSubject<User>;
  private currentUser: Observable<User>;
  // user = new User() ;

  constructor(private http:HttpClient) { 
    // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    // this.currentUser = this.currentUserSubject.asObservable();
    // console.log(this.currentUser);
  }

  addNewUser(newuser : User):Observable<any>{
    return this.http.post(this.baseUrl + 'adduser',newuser);
  }

  getCurrentUser(useremail:String,userpswd:String): Observable<User>{
    console.log(this.http.get<User>(this.baseUrl + 'checklogin/' + useremail + '/' + userpswd));
    return this.http.get<User>(this.baseUrl + 'checklogin/' + useremail + '/' + userpswd);
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  getPolicyDetails(uemail : String):Observable<any>{
    return this.http.get<Policy[]>(this.baseUrl + 'policies' + '/' + uemail);
  }

  addVehicle(vehicle : Vehicle,useremail : String){
    return this.http.post(this.baseUrl + 'addvehicle/' + useremail,vehicle);
  }

  getPlanId(vehicleType:String,planType:String):Observable<number>{
    return this.http.get<number>(this.baseUrl + 'planId/' + vehicleType + '/' + planType);
  }

  addPolicy(policy:Policy,userEmail:String,regNum:String,planId:number){
    return this.http.post(this.baseUrl + 'addpolicy/' + userEmail + '/' + regNum + '/' + planId,policy);
  }

  updatePolicyEndDate(policyNum:number, endDate:Date): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl + 'updatepolicy/'+ policyNum + '/' + endDate);
  }

  getClaims(){
    return this.http.get<Claims[]>(this.baseUrl + 'claims');
  }

  getPlanList(vehicle_type_for_list: string){
    return this.http.get<Observable<Plans>[]>(this.baseUrl + 'plans'+'/'+vehicle_type_for_list);
  }

  getVehicleNamesList(vehicle_type_for_list: string){
    return this.http.get<Observable<String>[]>(this.baseUrl + 'plans'+'/vtypes/'+vehicle_type_for_list);
  }

  getPlanAmt(v_name: string, plan_type: string):Observable<number>{
    // http://localhost:8080/api/v1/findAmt/Maruti%202W/Comprehensive

    console.log(this.baseUrl + 'findAmt'+'/'+v_name+ '/' + plan_type);
    console.log(this.http.get<number>(this.baseUrl + 'findAmt'+'/'+v_name+ '/' + plan_type));
    return this.http.get<number>(this.baseUrl + 'findAmt'+'/'+v_name+ '/' + plan_type);
  }

  getClaimsById(useremail:number):Observable<any>
  {
  console.log(this.baseUrl+'userclaims/'+useremail);
  return this.http.get<any[]>(this.baseUrl+'userclaims/'+useremail);

  }
  
  claimPolicy(cls:Object, policyNum:number):Observable<boolean>{
    //console.log(this.http.post(this.baseUrl+'addclaims/'+policyNum));
  return this.http.post<boolean>(`${this.baseUrl}`+'addclaims/' + policyNum,cls);

  }


}
