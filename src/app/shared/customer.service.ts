import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Customer } from './customer.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url:string = environment.apiBaseUrl + '/Customer'
  list: Customer[] = [];
  formData: Customer = new Customer()
  formSubmitted: boolean = false;

  constructor(private http: HttpClient) { }

  refreshList(){
    this.http.get(this.url)
    .subscribe({
      next: res => {
        console.log(res)
        this.list = res as Customer[]
      },
      error: err => { console.log(err) }
    })
  }

  postCustomer(){
    return this.http.post(this.url, this.formData)
  }

  putCustomer(){
    return this.http.put(this.url + '?id=' + this.formData.id, this.formData)
  }

  deleteCustomer(id:number){
    return this.http.delete(this.url + '?id=' + id)
  }

  resetForm(form:NgForm){
    form.form.reset()
    this.formData = new Customer()
    this.formSubmitted = false
  }
}
