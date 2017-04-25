import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  ladies3: string;
  ladies35: string;
  ladies4: string;
  men35: string;
  men4: string;

  constructor() { }

  ngOnInit() {
    this.ladies3 = '../../../assets/Ladies_3.pdf';
  }

}
