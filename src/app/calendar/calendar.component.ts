import { Component, OnInit } from '@angular/core';
import { ICalendarModels } from '../Interfaces/Calendar-models';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  public cars: ICalendarModels[] = [
    {
      model: 'SUV',
      stateNumber: 'XX-1234-GH',
      reservations: [
        {
          name: 'Mr. Navneet',
          price: 550,
          direction: 5,
        },
        {
          name: 'Mr. Bob',
          price: 250,
          direction: 2,
        }
      ]
    },
    {
      model: 'Jeep',
      stateNumber: 'FD-3424-GH',
      reservations: [
        {
          name: 'Mr Sanya',
          price: 300,
          direction: 3,
        },
        {
          name: 'Mr Pitter',
          price: 1000,
          direction: 10,
        },
      ]
    },
    {
      model: 'Family van',
      stateNumber: 'YT-1245-77',
      reservations: [
        {
          name: 'Mr Cayet',
          price: 750,
          direction: 7,
        },
        {
          name: 'Mr. Navneet',
          price: 550,
          direction: 4
        },
      ]
    }
  ];
  public limit = 3;
  public date = moment();
  public months = [];
  public days = [];
  public currentMonth: number;
  constructor() { }

  ngOnInit() {
    this.months = moment.months();
    this.currentMonth = this.date.get('month');
    this.getMonthDays();
  }

  getCurrentDate() {
    return this.months[this.currentMonth] + this.date.get('year');
  }

  changeMonth(month) {
    this.date.add(month, 'months');
    this.currentMonth = this.date.get('month');
    this.getMonthDays();
  }

  nextMonth() {
    this.changeMonth(1);
  }

  prevMonth() {
    this.changeMonth(-1);
  }

  getMonthDays() {
    this.days = Array.apply(null, { length: this.date.daysInMonth() })
      .map(Number.call, Number);
  }

}
