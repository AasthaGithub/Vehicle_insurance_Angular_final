import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-renew-policy',
  templateUrl: './renew-policy.component.html',
  styleUrls: ['./renew-policy.component.css']
})
export class RenewPolicyComponent implements OnInit {

  constructor(private userService: UserService, private router: Router)  //when component is called then that service/waiter (who isholding data) is invoked
  {  }

  ngOnInit(): void {
    
  }

  updatePolicyGroup=  new FormGroup({

    policyNum: new FormControl(),
    endDate: new FormControl()
  })

  get endDate(){  
    console.log(this.updatePolicyGroup.get('endDate'));
    return this.updatePolicyGroup.get('endDate');  
  }

  get policyNum(){  
    console.log(this.updatePolicyGroup.get('policyNum'));
    return this.updatePolicyGroup.get('policyNum');  
  }

  public updatePolicy() {
    this.userService.updatePolicyEndDate(this.policyNum.value, this.endDate.value).subscribe( data => {
      console.log(this.policyNum)
      console.log(this.endDate)
      console.log(data);
      // document.getElementById('id01').style.display = "none";
      alert("Renewed Policy!");
      this.router.navigate(['user-home']);
    },
    error => console.log(error));
  }


}
