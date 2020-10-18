import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from './../../../models/users.model';
import { UsersService } from './../../../services/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: User;
  constructor(private route: ActivatedRoute,
    private usersService: UsersService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.usersService.getUser(params.id)
        .subscribe(userData => {
          this.user = userData;
        })
    })
  }

  onSubmit({ value, valid }): void {
    if (valid) {
      this.usersService.updateUser(this.user.id, value.name, value.email)
        .subscribe((updateUserResponse: User) => {
          this.toastr.success(`User ${value.name} updated successfully`, 'Success!');
          this.router.navigate([`/users`]);
        }, error => {
          this.toastr.error('Email must be unique', 'Error!');
        })
    }
  }

}