import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-edit',
    template: `
    <style>
    hr.style13 {
      height: 10px;
      border: 0;
      box-shadow: 0 10px 10px -50px #8c8b8b inset;
  
    }
    </style>
    
    <div class="container">
  <h1 class="text-center">Edit Employee</h1>
  <hr class="style1">
  <form class="form-horizontal">

  
  <div class="row">
  <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Employee id</span>
      </div>
      <input type="text" #employeeid (change)="0" class="form-control" placeholder="Enter Employee id" aria-label="Username" aria-describedby="basic-addon1">
   </div>
</div>
<div class="row">
  <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Employee first_name</span>
      </div>
      <input type="text" #employeefirst (change)="0" class="form-control" placeholder="Enter first_name" aria-label="Username" aria-describedby="basic-addon1">
   </div>
</div>

<div class="row">
  <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Employee last_name</span>
      </div>
      <input type="text" #employeelast (change)="0" class="form-control" placeholder="Enter first_name" aria-label="Username" aria-describedby="basic-addon1">
   </div>

</div>


<div class="row">
  <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Employee email</span>
      </div>
      <input type="text" #employeeemail (change)="0" class="form-control" placeholder="Enter first_name" aria-label="Username" aria-describedby="basic-addon1">
   </div>
</div>

<div class="row">
  <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Employee gender</span>
      </div>
      <input type="text" #employeegender (change)="0" class="form-control" placeholder="Enter first_name" aria-label="Username" aria-describedby="basic-addon1">
   </div>
</div>

  <button type="button" class="btn btn-info">UPDATE</button> 
  <button type="button" class="btn btn-dark">Cancel</button>
  
  </form>
  </div>
    `
})
export class EditComponent implements OnInit {

    constructor() { }

    ngOnInit() { 

    }

}



