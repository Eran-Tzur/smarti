import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from './../models/users.model';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = environment.apiURL;
  usersChanged = new Subject<User[]>();
  users: User[];

  constructor(private http: HttpClient,
    private toastr: ToastrService
  ) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('enctype', 'multipart/form-data');
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('X-Requested-With', 'XMLHttpRequest');
  }

  getUsers(): void {
    this.http.get<User[]>(`${this.apiUrl}get-users`)
      .subscribe((usersData: User[]) => {
        this.setUsers(usersData);
      })
  }

  getUser(userId: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}get-user/${userId}`);
  }

  addUser(user: User): void {
    this.http.post<User>(`${this.apiUrl}add-user`, user)
      .subscribe((user: User) => {
        this.toastr.success(`User ${user.name} added successfully`, 'Success!');
        this.users.push(user);
        this.usersChanged.next(this.users.slice());
      }, error => {
        this.toastr.error('Email must be unique', 'Error!');
      })
  }

  setUsers(users: User[]): void {
    this.users = users;
    this.usersChanged.next(this.users.slice());
  }

  deleteUser(userId: number, name: string, index: number): void {
    const userDataObject = {
      id: userId
    }
    this.toastr.success(`User ${name} deleted successfully`, 'Success!');
    this.users.splice(index, 1);
    this.usersChanged.next(this.users.slice());
    this.http.post<User>(`${this.apiUrl}delete-user`, userDataObject).subscribe();
  }

  updateUser(id: number, name: string, email: string): Observable<User> {
    const userDataObject = {
      id,
      name,
      email
    }
    return this.http.post<User>(`${this.apiUrl}update-user`, userDataObject);
  }
}
