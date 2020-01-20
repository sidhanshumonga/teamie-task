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
  filtered = false;
  constructor(private service: MessageService) {
    this.service.getSortingOption().subscribe(state => {
      if (state) {
        this.sortBy(this.users, state);
      }
    });


    this.service.getUpdatedDates().subscribe(state => {
      if (state) {
        this.dates = state;
        this.filterBy(this.allUsers, state);
      }
    });
  }

  ngOnInit() {
    this.users = constant.data.map(x => {
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
    this.sortBy(this.users, 'total');
  }

  sortBy(array, key) {
    array.sort((a, b) => {
      return a[key] - b[key];
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
    const index = this.allUsers.findIndex(x => x.uid === user.uid);
    this.allUsers.splice(index, 1);
    this.users = [...this.allUsers];
  }

}
