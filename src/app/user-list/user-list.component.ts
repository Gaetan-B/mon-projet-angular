import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../models/User.model";
import {Subscription} from "rxjs";
import {UserServices} from "../services/user.services";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy{

  users!: User[];
  userSubscription!: Subscription;

  constructor(private userService: UserServices) {
  }

  ngOnInit() {
    this.userSubscription = this.userService.userSubject.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
    this.userService.emitUsers();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
