
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../../view-models/Customer';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class CustomersDataService {

  baseUrl = 'https://localhost:5002/api/customer';
  customers: Customer[] = [];

  constructor(private http: HttpClient) { }

  getCutomers(): Observable<Customer[]> {

    const header = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'No-Auth': 'True'
    });

    return this.http.get<Customer[]>(this.baseUrl, httpOptions);
  }

  getCutomerByTags(tags: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.baseUrl}/${tags}`, httpOptions);
  }

}
