import { Component, OnInit } from '@angular/core';
import { Customer } from '../../view-models/Customer';
import { CustomersDataService } from '../services/customers-data.service';
import { TokenStorageService } from '../services/tokenStorageService';
import { Router } from "@angular/router";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Customer[] = [];
  isLoggedIn = false;

  tags: any[] = [
    { value: "Small", name: 'Small' },
    { value: "Small,Medium", name: 'Medium' },
    { value: "Small,Medium,Large", name: 'large' },
  ];
  selected: number = 1;


  constructor(private customerService: CustomersDataService,
    private router: Router,
    private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }

    if (this.isLoggedIn) {
      this.customerService.getCutomers().subscribe(results => {
        this.customers = results;
      });
    }
    else {
      this.router.navigate(['']);
    }
  }

  onGetCustomers(tags: string) {
    this.customerService.getCutomerByTags(tags).subscribe(results => {
      this.customers = results;
    });
  }

  refresh(): void {
    window.location.reload();    
  }
}
