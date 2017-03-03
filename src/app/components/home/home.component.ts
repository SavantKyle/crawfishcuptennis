import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  wordleTennis: string;
  crawfishCupLogo: string;
  constructor() { }

  ngOnInit() {
    this.crawfishCupLogo = '../../../assets/crawfishCupLogo.jpg';
  }
}
