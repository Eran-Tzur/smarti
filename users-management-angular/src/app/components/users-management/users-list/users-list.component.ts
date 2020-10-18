import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from './../../../models/users.model';
import { UsersService } from './../../../services/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnDestroy {
  users: User[];
  getUsersSubscription: Subscription;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.usersService.getUsers();
    this.getUsersSubscription = this.usersService.usersChanged
      .subscribe((usersData: User[]) => {
        this.users = usersData;
      });
  }

  ngOnDestroy(): void {
    this.getUsersSubscription.unsubscribe();
  }

}