import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as constant from '../CONSTANTS';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-users-grid',
  templateUrl: './users-grid.component.html',
  styleUrls: ['./users-grid.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UsersGridComponent implements OnInit {
  public users = [];
  public allUsers = [];
  public dates: any;
  public sortType: any = true;
  filtered = false;
  // asc = true;
  constructor(private service: MessageService) {
    this.service.getSortingOption().subscribe(state => {
      if (state) {
        this.sortType = state.asc;
        this.sortBy(this.users, state);
      }
    });


    this.service.getUpdatedDates().subscribe(state => {
      if (state.startDate && state.endDate) {
        this.dates = state;
        this.filterBy(this.allUsers, state);
      } else {
        this.filtered = false;
        this.users = [...this.allUsers];
      }
    });
  }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.service.fetchUsers().subscribe(res => {
      this.users = res.map(x => {
        return {
          ...x,
          total: x.twubric.total,
          friends: x.twubric.friends,
          influence: x.twubric.influence,
          chirpiness: x.twubric.chirpiness,
          join_date: new Date(x.join_date * 1000)
        };
      });
      this.allUsers = [...this.users];
      this.sortBy(this.users, { value: 'total', asc: true });
    });
  }
  sortBy(array, key) {
    array.sort((a, b) => {
      return key.asc ? a[key.value] - b[key.value] : b[key.value] - a[key.value];
    });
    this.users = [...array];
  }

  filterBy(array, dates) {
    this.users = array.filter(x => {
      if (dates.startDate < x.join_date && dates.endDate > x.join_date) {
        return x;
      }
    });
    this.filtered = true;
  }

  deleteUser(user: any) {
    const index = this.users.findIndex(x => x.uid === user.uid);
    this.users.splice(index, 1);
    // this.users = [...this.allUsers];
  }

}
