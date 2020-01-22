import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as Constants from './CONSTANTS'

@Injectable()
export class MessageService {
  sorting: any;
  dates: any;
  sortingChanged = new Subject<object>();
  datesChanged = new Subject<object>();

  constructor(private httpService: HttpClient) { }

  updateSortOption(sortOption, asc) {
    this.sorting = { value: sortOption, asc: asc };
    console.log(this.sorting);
    this.sortingChanged.next(this.sorting);
  }

  getSortingOption(): Observable<any> {
    return this.sortingChanged.asObservable();
  }


  updateDates(dates) {
    this.dates = dates;
    this.datesChanged.next(this.dates);
  }

  getUpdatedDates(): Observable<any> {
    return this.datesChanged.asObservable();
  }

  public fetchUsers(): Observable<any> {
    return this.httpService.get(Constants.baseUrl);
}
}
