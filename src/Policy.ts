import { User } from "./User";
import { Vehicle } from "./Vehicle";

export class Policy{
    "policyNum" : number;
    "vehicleRegNum" : Vehicle;
    "userId" : User;
    "period" : number;
    "startDate" : Date;
    "endDate" : Date;
}