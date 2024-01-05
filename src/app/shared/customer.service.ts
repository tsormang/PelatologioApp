import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url:string = environment.apiBaseUrl + '/Customer'
  list: Customer[] = []
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
}
