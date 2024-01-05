import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styles: [
  ]
})
export class CustomerComponent implements OnInit{
  constructor(public service: CustomerService){

  }
  ngOnInit(): void {
    this.service.refreshList();
  }
}
