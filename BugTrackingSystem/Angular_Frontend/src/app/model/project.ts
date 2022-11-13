import { Bug } from "./bug";
import { Employee } from "./employee";

export class Project{
    projectId:number;
    projectName:string;
    projectOwner:string;
    status:string;
    bugList:Bug[];
    members:Employee[];
  }