import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {
  pinnacleLogo: string;
  republicFinanceLogo: string;
  americanFactoryDirectLogo: string;
  pelicanStateCreditUnionLogo: string;
  kickstandsKitchenLogo: string;
  sushiMasaLogo: string;
  theLondonerLogo: string;
  louisianaFishFryLogo: string;
  coxLogo: string;
  theChimesLogo: string;
  flemingsLogo: string;
  mellowMushroomLogo: string;

  constructor() { }

  ngOnInit() {
    this.pinnacleLogo = '../../../assets/pinnacleLogo.jpg';
    this.republicFinanceLogo = '../../../assets/republicFinanceLogo.jpg';
    this.americanFactoryDirectLogo  = '../../../assets/americanFactoryDirectLogo.jpg';
    this.pelicanStateCreditUnionLogo = '../../../assets/pelicanStateCreditUnionLogo.jpg';
    this.kickstandsKitchenLogo = '../../../assets/kickstandsKitchenLogo.png';
    this.sushiMasaLogo = '../../../assets/sushiMasaLogo.jpg';
    this.theLondonerLogo = '../../../assets/theLondonerLogo.jpg';
    this.louisianaFishFryLogo = '../../../assets/louisianaFishFryLogo.jpg';
    this.coxLogo = '../../../assets/coxLogo.png';
    this.theChimesLogo = '../../../assets/theChimesLogo.jpg';
    this.flemingsLogo = '../../../assets/flemingsLogo.jpg';
    this.mellowMushroomLogo = '../../../assets/mellowMushroomLogo.jpg';
  }
}
