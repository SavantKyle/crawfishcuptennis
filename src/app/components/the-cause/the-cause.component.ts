import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'the-cause',
  templateUrl: './the-cause.component.html',
  styleUrls: ['./the-cause.component.css']
})
export class TheCauseComponent implements OnInit {
  acsLogo: string;
  constructor() { }

  ngOnInit() {
    this.acsLogo = '../../../assets/acs_logo.jpg';
  }
}
