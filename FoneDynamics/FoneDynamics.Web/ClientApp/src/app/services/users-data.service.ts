import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../view-models/User';
import { UserToken } from '../../view-models/UserToken';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  userApiUrl = 'https://localhost:5002/api/Authentication';

  constructor(private http: HttpClient) { }

  authenticateUser(user: User): Observable<UserToken> {
    const url = `${this.userApiUrl}/login/${user.userName}/${user.password}`;
    return this.http.post<UserToken>(url, httpOptions);
  }

  registerUser(user: User): Observable<User> {
    const url = `${this.userApiUrl}/register/${user.userName}/${user.password}`;
    return this.http.post<User>(url, user, httpOptions);
  }
}
