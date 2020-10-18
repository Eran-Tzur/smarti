import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../../services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  name: string;
  email: string;

  constructor(private usersService: UsersService, ) { }

  ngOnInit() {
  }

  onSubmit(addUserForm): void {
    if (addUserForm.valid) {
      this.usersService.addUser(addUserForm.value);
      addUserForm.reset();
    }
  }

}