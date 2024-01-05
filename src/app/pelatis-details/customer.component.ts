import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';
import { Customer } from '../shared/customer.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styles: [
  ]
})
export class CustomerComponent implements OnInit{
  constructor(public service: CustomerService, private toastr:ToastrService){

  }
  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: Customer){
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id:number){
    if(confirm('Do you really want to delete this Customer?')){
      this.service.deleteCustomer(id)
      .subscribe({
        next: res =>{
          console.log(res)
          this.service.list = res as Customer[]
          this.toastr.error("Customer deleted successfully.", "Customer Details")
        },
        error: err => {console.log(err)}
      })
    }

  }

}
