import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmployeeService {
    
    constructor(public http: HttpClient){    }

    baseUrl: string = 'http://localhost:3000/employee/'

    addEmployee(id : number,first_name : string,
        last_name: string,email : string, gender : string): Promise<any>
    {
        return this.http.post(this.baseUrl,{
        id : id,  
        first_name : first_name,
        last_name : last_name,
        email : email,
        gender : gender
      
        } )
          .toPromise()
          .then(res => res)
    }

    fetchEmployee() : Promise<any>
    {
       return this.http.get(this.baseUrl)
        .toPromise()
        .then(res => res)
    
             
    }

    deleteEmployee(key:number) : Promise<any>
    {
        console.log('deleting',key);      
        return  this.http.delete(this.baseUrl +key)
        .toPromise()
        .then(res => res)
        
        
      
      
    }


}