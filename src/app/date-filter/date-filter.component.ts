import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.scss']
})
export class DateFilterComponent implements OnInit {
  dates = [];
  constructor(private service: MessageService) { }

  ngOnInit() {
  }

  updateDate(type: string, event: MatDatepickerInputEvent<Date>) {
    this.dates[type] =  event.value;

    // tslint:disable-next-line: no-string-literal
    if (type === 'endDate' || (type === 'startDate' && this.dates['endDate'])) {
      this.service.updateDates(this.dates);
    }
  }

}
