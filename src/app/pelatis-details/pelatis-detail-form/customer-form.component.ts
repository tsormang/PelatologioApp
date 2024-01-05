import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/shared/customer.model';
import { CustomerService } from 'src/app/shared/customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styles: [
  ]
})
export class CustomerFormComponent {
  constructor(public service: CustomerService, private toastr:ToastrService){

  }

  onSubmit(form: NgForm){
    this.service.formSubmitted = true
    if (form.valid){
      if(this.service.formData.id == 0){
        this.insertCustomer(form)
      }else{
        this.updateCustomer(form)
      }
    }

  }

  insertCustomer(form: NgForm){
    this.service.postCustomer()
    .subscribe({
      next: res =>{
        console.log(res)
        this.service.list = res as Customer[]
        this.service.resetForm(form)
        this.toastr.success("Customer succesfully created.", "Customer Details")
      },
      error: err => {console.log(err)}
    })
  }

  updateCustomer(form: NgForm){
    this.service.putCustomer()
    .subscribe({
      next: res =>{
        console.log(res)
        this.service.list = res as Customer[]
        this.service.resetForm(form)
        this.toastr.info("Customer succesfully updated.", "Customer Details")
      },
      error: err => {console.log(err)}
    })
  }

}
