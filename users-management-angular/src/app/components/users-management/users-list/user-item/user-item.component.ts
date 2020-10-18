import { Component, OnInit, Input } from '@angular/core';
import { User } from './../../../../models/users.model';
import { UsersService } from './../../../../services/users.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() user: User;
  @Input() index: number;
  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  onDelete(): void {
    this.usersService.deleteUser(this.user.id, this.user.name, this.index);
  }

}